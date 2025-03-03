// adminService.js
const devUrl = "http://localhost:4000/api/admin/";
const prodUrl = "https://school-web-wpxn.onrender.com/api/admin/"
const adminService = {
  // Get all admission queries
  getLeads: async () => {
    try {
      const response = await fetch(`${prodUrl}queries`, {
        method: 'GET',
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch admission queries');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching leads:', error);
      throw error;
    }
  },
  
  
  
  // Delete a lead
  deleteLead: async (leadId) => {
    try {
      const response = await fetch(`${prodUrl}query/${leadId}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete lead');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error deleting lead:', error);
      throw error;
    }
  },
  
  // Submit form
  submitForm: async (formData) => {
    try {
      const response = await fetch(`${prodUrl}submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw { response: { data: errorData } };
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  }
};

export default adminService;