// MarketingCampaign.jsx
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  RefreshCw, 
  Phone,
  Mail,
  AlertCircle,
  Eye,
  Trash2
} from 'lucide-react';
import adminService from './adminService';

const MarketingCampaign = () => {
  // State for managing lead data
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // State for search
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for modal
  const [showLeadDetail, setShowLeadDetail] = useState(false);
  
  // State for confirmation dialog
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Fetch leads when component mounts
  useEffect(() => {
    fetchLeads();
  }, []);

  // Apply search filter when leads or search term changes
  useEffect(() => {
    filterLeads();
  }, [leads, searchTerm]);

  // Fetch leads from API
  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const response = await adminService.getLeads();
      console.log('response', response);
      setLeads(response.data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter leads based on search term
  const filterLeads = () => {
    if (!searchTerm.trim()) {
      setFilteredLeads([...leads]);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = leads.filter(
      lead => lead.parentName?.toLowerCase().includes(term) ||
             lead.email?.toLowerCase().includes(term) ||
             lead.phone?.includes(term)
    );
    
    // Sort by creation date (newest first)
    filtered.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
      const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
      return dateB - dateA;
    });
    
    setFilteredLeads(filtered);
  };

  // Handle view lead details
  const handleViewLead = (lead) => {
    setSelectedLead(lead);
    setShowLeadDetail(true);
  };

  // Show delete confirmation
  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowDeleteConfirm(true);
  };

  // Handle delete lead
  const handleDeleteLead = async () => {
    if (!deleteId) return;
    
    try {
      await adminService.deleteLead(deleteId);
      // Remove the deleted lead from state
      setLeads(leads.filter(lead => lead._id !== deleteId));
      setShowDeleteConfirm(false);
      setDeleteId(null);
    } catch (error) {
      console.error('Error deleting lead:', error);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "No date available";
    
    try {
      // Parse the ISO date string
      const date = new Date(dateString);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }
      
      // Format the date
      const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      
      return date.toLocaleDateString(undefined, options);
    } catch (err) {
      console.error("Date formatting error:", err);
      return "Invalid Date";
    }
  };

  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800';
      case 'Qualified': return 'bg-purple-100 text-purple-800';
      case 'Enrolled': return 'bg-green-100 text-green-800';
      case 'Not Interested': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800'; // Default to New
    }
  };

  return (
    <div className="ml-16 p-6 bg-gray-50 min-h-screen">
      {/* Main content with proper margin to avoid overlapping with sidebar */}
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#264653]">Marketing Campaign</h1>
            <p className="text-gray-600">View admission inquiries from prospective parents</p>
          </div>
          
          <button 
            onClick={fetchLeads} 
            className="mt-4 md:mt-0 inline-flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8A2E88]"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm border mb-8 overflow-hidden">
          <div className="p-6">
            <div className="relative max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, email or phone"
                className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#8A2E88] focus:border-[#8A2E88]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Lead Data Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#8A2E88]" />
              <h2 className="text-lg font-medium">Admission Inquiries</h2>
            </div>
            <div className="text-sm text-gray-500">
              {filteredLeads.length} {filteredLeads.length === 1 ? 'result' : 'results'}
            </div>
          </div>
          
          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="py-20 text-center">
                <RefreshCw className="animate-spin h-10 w-10 mx-auto text-[#8A2E88]" />
                <p className="mt-4 text-gray-600">Loading admission inquiries...</p>
              </div>
            ) : filteredLeads.length === 0 ? (
              <div className="py-20 text-center">
                <AlertCircle className="h-10 w-10 mx-auto text-gray-400" />
                <p className="mt-4 text-gray-600">No admission inquiries found</p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-4 inline-flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8A2E88]"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            ) : (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Parent Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Contact Info</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Grade</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Reference Number</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Date</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredLeads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{lead.parentName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1 text-sm">
                            <Mail className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-900">{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Phone className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-900">{lead.phone}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                        {lead.grade}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(lead.status || 'New')}`}>
                          {lead.referenceNumber || 'New'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(lead.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <button
                            className="inline-flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                            onClick={() => handleViewLead(lead)}
                          >
                            <Eye className="h-3 w-3" />
                            <span>View</span>
                          </button>
                          <button
                            className="inline-flex items-center gap-1 px-3 py-1 border border-red-200 rounded-md text-xs font-medium text-red-600 bg-white hover:bg-red-50 focus:outline-none"
                            onClick={() => confirmDelete(lead._id)}
                          >
                            <Trash2 className="h-3 w-3" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      
      {/* Lead Detail Modal */}
      {showLeadDetail && selectedLead && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg max-w-xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#264653]">Inquiry Details</h2>
              <button 
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setShowLeadDetail(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#8A2E88]">Parent Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Parent Name</p>
                    <p className="font-medium">{selectedLead.parentName}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Grade Applying For</p>
                    <p className="font-medium">Grade {selectedLead.grade}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#8A2E88]">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <a href={`mailto:${selectedLead.email}`} className="text-blue-600 hover:underline flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {selectedLead.email}
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <a href={`tel:${selectedLead.phone}`} className="text-blue-600 hover:underline flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {selectedLead.phone}
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#8A2E88]">Inquiry Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Current Status</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedLead.status || 'New')}`}>
                      {selectedLead.status || 'New'}
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Submission Date</p>
                    <p>{formatDate(selectedLead.createdAt)}</p>
                  </div>
                </div>
              </div>
              
              {selectedLead.notes && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#8A2E88]">Notes</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="whitespace-pre-line">{selectedLead.notes}</p>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-[#8A2E88] hover:bg-[#8A2E88]/90 text-white rounded-md focus:outline-none"
                  onClick={() => setShowLeadDetail(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Admission Query</h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to delete this admission query? This action cannot be undone.
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="px-4 py-2 bg-white border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-600 border border-transparent rounded-md font-medium text-white hover:bg-red-700 focus:outline-none"
                onClick={handleDeleteLead}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketingCampaign;