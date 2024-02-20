const RaiseATicket = () => {
  return (
    <div className="flex-col lg:flex-row text-start md:text-center py-10 px-6 bg-secondary text-white tracking-wide flex items-start md:items-center justify-center gap-6 font-semibold ">
      <h4 className="text-[16px] sm:text-xl md:text-xl lg:text-2xl">
        Should you encounter any challenges or have questions about the online
        payment process
      </h4>
      <button className="bg-ctcSecondary text-ctcPrimary px-8 py-4 rounded-sm font-semibold tracking-wide hover:translate-x-3 transition-all ease-in-out duration-800 ">
        Raise a ticket &gt;
      </button>
    </div>
  );
};

export default RaiseATicket;
