import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Users, Mail, ArrowLeft, Trash2, Search, RefreshCw,
  Calendar, MessageSquare, Phone, Globe
} from 'lucide-react';
import gamlensLogo from '@/assets/images/logo.png';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm" data-testid={`admin-stat-${label.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
      </div>
      <div className="font-heading font-bold text-3xl text-white tracking-tight">{value}</div>
      <p className="text-xs font-body text-white/50 mt-1">{label}</p>
    </div>
  );
}

export default function AdminPanel() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('contacts');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const [contactsRes, subsRes] = await Promise.all([
        axios.get(`${API}/contacts`),
        axios.get(`${API}/subscribers`),
      ]);
      setContacts(contactsRes.data);
      setSubscribers(subsRes.data);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredContacts = contacts.filter((c) =>
    c.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.message?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSubscribers = subscribers.filter((s) =>
    s.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gl-black font-body" data-testid="admin-panel">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              data-testid="admin-back-btn"
              onClick={() => navigate('/')}
              className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>
            <div className="flex items-center gap-2">
              <img src={gamlensLogo} alt="GamLens" className="h-7 w-auto object-contain" />
              <span className="text-xs font-body text-white/50 bg-white/5 px-2 py-0.5 rounded-full ml-1">Admin</span>
            </div>
          </div>
          <button
            data-testid="admin-refresh-btn"
            onClick={fetchData}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/8 text-sm font-body font-medium text-white transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon={MessageSquare} label="Total Contacts" value={contacts.length} color="#3081FF" />
          <StatCard icon={Mail} label="Subscribers" value={subscribers.length} color="#22C55E" />
          <StatCard icon={Users} label="Today's Leads" value={contacts.filter(c => {
            const d = new Date(c.created_at);
            const today = new Date();
            return d.toDateString() === today.toDateString();
          }).length} color="#FF3B30" />
          <StatCard icon={Globe} label="Sports Covered" value={[...new Set(contacts.map(c => c.sport).filter(Boolean))].length} color="#3081FF" />
        </div>

        {/* Tabs + Search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex gap-2">
            {['contacts', 'subscribers'].map((tab) => (
              <button
                key={tab}
                data-testid={`admin-tab-${tab}`}
                onClick={() => { setActiveTab(tab); setSearchQuery(''); }}
                className={`px-4 py-2 rounded-xl text-sm font-body font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-gl-dark text-white shadow-md'
                    : 'bg-white/5 text-white/50 hover:bg-white/8'
                }`}
              >
                {tab === 'contacts' ? `Contacts (${contacts.length})` : `Subscribers (${subscribers.length})`}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              data-testid="admin-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeTab}...`}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/8 text-sm font-body text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-gl-blue/30"
            />
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-20">
            <RefreshCw className="w-6 h-6 text-gl-blue animate-spin mx-auto" />
            <p className="text-sm font-body text-white/50 mt-3">Loading data...</p>
          </div>
        )}

        {/* Contacts table */}
        {!loading && activeTab === 'contacts' && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-testid="admin-contacts-table">
            {filteredContacts.length === 0 ? (
              <div className="text-center py-16">
                <MessageSquare className="w-8 h-8 text-white/20 mx-auto" />
                <p className="text-sm font-body text-white/50 mt-3">
                  {searchQuery ? 'No contacts match your search' : 'No contact submissions yet'}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 bg-white/3">
                      <th className="text-left text-xs font-body font-semibold text-white/50 uppercase tracking-wider px-5 py-3">Name</th>
                      <th className="text-left text-xs font-body font-semibold text-white/50 uppercase tracking-wider px-5 py-3">Email</th>
                      <th className="text-left text-xs font-body font-semibold text-white/50 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Phone</th>
                      <th className="text-left text-xs font-body font-semibold text-white/50 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Sport</th>
                      <th className="text-left text-xs font-body font-semibold text-white/50 uppercase tracking-wider px-5 py-3">Message</th>
                      <th className="text-left text-xs font-body font-semibold text-white/50 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredContacts.map((contact, i) => (
                      <tr key={contact.id || i} className="border-b border-white/4 hover:bg-white/3 transition-colors" data-testid={`admin-contact-row-${i}`}>
                        <td className="px-5 py-3.5">
                          <span className="text-sm font-body font-medium text-white">{contact.name}</span>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className="text-sm font-body text-gl-blue">{contact.email}</span>
                        </td>
                        <td className="px-5 py-3.5 hidden md:table-cell">
                          <span className="text-sm font-body text-white/50">{contact.phone || '—'}</span>
                        </td>
                        <td className="px-5 py-3.5 hidden lg:table-cell">
                          {contact.sport ? (
                            <span className="text-xs font-body font-medium bg-gl-blue/10 text-gl-blue px-2.5 py-1 rounded-full">{contact.sport}</span>
                          ) : (
                            <span className="text-sm font-body text-white/50">—</span>
                          )}
                        </td>
                        <td className="px-5 py-3.5 max-w-[200px]">
                          <p className="text-sm font-body text-white/50 truncate">{contact.message}</p>
                        </td>
                        <td className="px-5 py-3.5 hidden md:table-cell">
                          <span className="text-xs font-body text-white/50">
                            {contact.created_at ? new Date(contact.created_at).toLocaleDateString() : '—'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Subscribers table */}
        {!loading && activeTab === 'subscribers' && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-testid="admin-subscribers-table">
            {filteredSubscribers.length === 0 ? (
              <div className="text-center py-16">
                <Mail className="w-8 h-8 text-white/20 mx-auto" />
                <p className="text-sm font-body text-white/50 mt-3">
                  {searchQuery ? 'No subscribers match your search' : 'No subscribers yet'}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 bg-white/3">
                      <th className="text-left text-xs font-body font-semibold text-white/50 uppercase tracking-wider px-5 py-3 w-8">#</th>
                      <th className="text-left text-xs font-body font-semibold text-white/50 uppercase tracking-wider px-5 py-3">Email</th>
                      <th className="text-left text-xs font-body font-semibold text-white/50 uppercase tracking-wider px-5 py-3">Subscribed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubscribers.map((sub, i) => (
                      <tr key={sub.id || i} className="border-b border-white/4 hover:bg-white/3 transition-colors" data-testid={`admin-subscriber-row-${i}`}>
                        <td className="px-5 py-3.5">
                          <span className="text-xs font-body text-white/50">{i + 1}</span>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className="text-sm font-body font-medium text-white">{sub.email}</span>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className="text-xs font-body text-white/50">
                            {sub.created_at ? new Date(sub.created_at).toLocaleDateString() : '—'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
