import React from 'react';

const RaiseATicket = () => {
  const handleRaiseTicketClick = () => {
    // Get the current date and time
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();

    // Construct the Gmail compose URL with the timestamp and the new email address
    const gmailComposeURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=zeeschoolmysore@gmail.com&su=Ticket%20Submission&body=Hello,%0A%0AI%20am%20encountering%20an%20issue%20with%20the%20online%20payment%20process.%20Please%20assist%20me.%0A%0AThank%20you.%0A%0A${formattedDateTime}`;

    // Open the Gmail compose URL in a new tab
    window.open(gmailComposeURL, '_blank');
  };

  return (
    <div className="flex-col lg:flex-row text-start md:text-center py-10 px-6 bg-secondary text-white tracking-wide flex items-start md:items-center justify-center gap-6 font-semibold">
      <h4 className="text-[16px] sm:text-xl md:text-xl lg:text-2xl">
        Should you encounter any challenges or have questions about the online payment process
      </h4>
      <button
        className="bg-ctcSecondary text-ctcPrimary px-8 py-4 rounded-sm font-semibold tracking-wide hover:translate-x-3 transition-all ease-in-out duration-800"
        onClick={handleRaiseTicketClick}
      >
        Raise a ticket &gt;
      </button>
    </div>
  );
};

export default RaiseATicket;
