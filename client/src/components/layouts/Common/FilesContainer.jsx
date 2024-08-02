import pdf1 from '../../../assets/Files/1MIS_Affiliation.pdf';
import pdf2 from '../../../assets/Files/2Trust_Registration.pdf';
import pdf3 from '../../../assets/Files/3NOC_MIS.pdf';
import pdf4 from '../../../assets/Files/4RTE.pdf';
import pdf5 from '../../../assets/Files/5building.pdf';
import pdf6 from '../../../assets/Files/6Fire.pdf';
import pdf8 from '../../../assets/Files/bMIS_Almanac_2024-25.pdf';
import pdf9 from '../../../assets/Files/cSMC.pdf';
import pdf10 from '../../../assets/Files/PTA1.pdf';
import pdf11 from '../../../assets/Files/ere-2024_merged.pdf';
import pdf12 from '../../../assets/Files/8.Water.pdf';
import pdf13 from '../../../assets/Files/7.GetSelfCertificationMISPdf.pdf';
import pdf14 from '../../../assets/Files/Fees.pdf';



const PDFCard = ({ title, pdfUrl }) => {
  return (
    <div 
      className="bg-secondary rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer h-48 sm:h-56 md:h-64 flex flex-col justify-between border-2 border-primary"
      onClick={() => window.open(pdfUrl, '_blank')}
    >
      <div className="p-4 sm:p-6 flex-grow flex items-center justify-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary text-center font-serif">{title}</h2>
      </div>
      <div className="bg-primary text-secondary font-semibold font-sans tracking-wide text-center py-2 sm:py-3 hover:bg-secondary hover:text-primary hover:border-2 hover:rounded-lg hover:shadow-2xl hover:shadow-slate-100 hover:border-primary transition duration-300">
        <span className="text-sm sm:text-base">View PDF</span>
      </div>
    </div>
  );
};

const FilesContainer = () => {
  const pdfs = [
    { title: "MIS Affiliation", pdfUrl: pdf1 },
    { title: "Trust Registration", pdfUrl: pdf2 },
    { title: "NOC MIS", pdfUrl: pdf3 },
    { title: "RTE", pdfUrl: pdf4 },
    { title: "Building", pdfUrl: pdf5 },
    { title: "Fire", pdfUrl: pdf6 },
    { title: "MIS Almanac", pdfUrl: pdf8 },
    { title: "SMC", pdfUrl: pdf9 },
    { title: "PTA", pdfUrl: pdf10 },
    { title: "Merger", pdfUrl: pdf11 },
    { title: "Water", pdfUrl: pdf12 },
    { title: "Self Certification", pdfUrl: pdf13 },
    { title: "Fees", pdfUrl: pdf14 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 mt-16 sm:mt-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-16 text-center mb-8 sm:mb-12 text-secondary font-serif">School Documents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {pdfs.map((pdf, index) => (
          <PDFCard key={index} {...pdf} />
        ))}
      </div>
    </div>
  );
};

export default FilesContainer;