import { ExternalLink } from "lucide-react";
import proteinMoleculeBg from "@/assets/protein-molecule-ai.png";

export const PublicationsTab = () => {
  // Function to make "R Mout" bold and journal names bold in citations
  const makeRubulNameBold = (text: string) => {
    // Replace "R Mout" with bold version, handling various formats
    let result = text.replace(
      /(R\s+Mout)/g, 
      '<strong class="font-bold text-black">$1</strong>'
    );
    
    // Also handle variations like "R Mout*", "R Mout#", etc.
    result = result.replace(
      /(R\s+Mout[*#])/g, 
      '<strong class="font-bold text-black">$1</strong>'
    );
    
    // Only bold specific journal names that appear before years
    const journalNames = [
      'bioRxiv', 'Nature', 'Cell', 'Proc. Natl. Acad. Sci. U.S.A.', 'Nanoscale', 
      'Nat commun.', 'Adv. Therap.', 'Bioconjugate Chem.', 'Bio-protocol', 
      'G.I.T Laboratory Journal', 'ACS Nano', 'J. Am. Chem. Soc.', 'Bioconjug. Chem.', 
      'Nature Nanotechnol.', 'Nature Chem.', 'ACS Cent. Sci.', 'Macromol. Rapid Commun.', 
      'Supramol. Chem.', 'Angew. Chem. Int. Ed. Engl.', 'Chem Commun.', 
      'Isr. J. Chem.', 'J. Inorg. Organomet. Polym. Mater.', 'Chem. Soc. Rev.', 
      'Adv. Drug. Deliv. Rev.', 'Malar J.', 'Arch. Biochem. Biophys.'
    ];
    
    journalNames.forEach(journal => {
      const escapedJournal = journal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // Handle both "Journal, YYYY" and "Journal YYYY" formats
      const regex1 = new RegExp(`(${escapedJournal}),\\s+(\\d{4})`, 'g');
      const regex2 = new RegExp(`(${escapedJournal})\\s+(\\d{4})`, 'g');
      result = result.replace(regex1, '<strong class="font-bold text-black">$1</strong>, $2');
      result = result.replace(regex2, '<strong class="font-bold text-black">$1</strong> $2');
    });
    
    return result;
  };

  const publications = [
    {
      title: "AP Patni, R Mout, R Moore, AA Alghadeer, GQ Daley, D Baker, J Mathieu, H Ruohola-Baker, \"Designed Soluble Notch Agonist Drives Human Ameloblast Maturation for Tooth Regeneration\" bioRxiv, 2025, doi: https://doi.org/10.1101/2025.04.03.646929",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:JV2RwH3_ST0C"
    },
    {
      title: "R Mout, ...U Lendahl, D Baker, SC Blacklow, GQ Daley et al., \"Design of Soluble Notch Agonists That Drive T Cell Development and Boost Immunity\" Cell, 2025, DOI: 10.1016/j.cell.2025.07.009.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:blknAaTinKkC"
    },
    {
      title: "R Mout, R Jing, L Hensch, U Lendahl, GQ Daley. \"Notch Signaling in Blood Development\" Manuscript in preparation, 2025",
      link: null
    },
    {
      title: "B Huang, ...R Mout, ...C Bertozzi, D Baker. \"Designed endocytosis-inducing proteins degrade targets and amplify signals\" Nature, 2025, 638(8051), 796-804.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:M3NEmzRMIkIC"
    },
    {
      title: "R Mout*#, RC Bretherton*, J Decarreau, S Lee, N Gregorio, NI Edman, M Ahlrichs, Y Hsia, DD Sahtoe, G Ueda, A Sharma, R Schulman, CA DeForest#, D Baker#. \"De novo design of modular protein hydrogels with programmable intra- and extracellular viscoelasticity\" Proc. Natl. Acad. Sci. U.S.A., 2024, 121(6), e2309457121 (#co-corresponding author)",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:e5wmG9Sq2KIC"
    },
    {
      title: "M Ray, G Brancolini, DC Luther, Z Jiang, R Cao-Milán, AM Cuadros, A Burden, V Clark, S Rana, R Mout, RF Landis, S Corni, VM Rotello. \"High affinity protein surface binding through co-engineering of nanoparticles and proteins\" Nanoscale, 2022, 14, 2411-2418.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:TQgYirikUcIC"
    },
    {
      title: "Y Hsia*, R Mout*, ..., D Baker. \"Design of multi-scale protein complexes by hierarchical building block fusion\" Nat commun., 2021, 12, 2294 (*equal contribution)",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:HDshCWvjkbEC"
    },
    {
      title: "YW Lee*, R Mout*, ..., VM Rotello. \"In Vivo Editing of Macrophages through Systemic Delivery of CRISPR‐Cas9‐Ribonucleoprotein‐Nanoparticle Nanoassemblies\" Adv. Therap. 2019, 2, 1900041 (*equal contribution)",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:IWHjjKOFINEC"
    },
    {
      title: "M Ray, YW Lee, J Hardie, R Mout, GY Tonga, ME Farkas, VM Rotello \"CRISPRed Macrophages for Cell-Based Cancer Immunotherapy\" Bioconjugate Chem. 2018, 29, 445-450.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:M3ejUd6NZC8C"
    },
    {
      title: "R Mout, VM Rotello. \"A General Method for Intracellular Protein Delivery through 'E-tag' Protein Engineering and Arginine Functionalized Gold Nanoparticles\" Bio-protocol, 2017, 7, e2661.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:4TOpqqG69KYC"
    },
    {
      title: "F Scaletti, D Luther, R Mout, M Ray, YW Lee, VM Rotello. \"CRISPR/Cas9 Protein Delivery Technologies\" G.I.T Laboratory Journal, 2017, 21, 22-23.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:_kc_bZDykSQC"
    },
    {
      title: "R Mout, VM Rotello. \"Cytosolic and Nuclear Delivery of CRISPR/Cas9-Ribonucleoprotein for Gene Editing using Arginine Functionalized Gold Nanoparticle\" Bio-protocol, 2017, 7, e2586.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:Zph67rFs4hoC"
    },
    {
      title: "R Mout, M Ray, T Tray, K Sasaki, GY Tonga, VM Rotello. \"General Strategy for Direct Cytosolic Protein Delivery via Protein-Nanoparticle Coengineering\" ACS Nano, 2017, 11, 6416-6421.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:KlAtU1dfN6UC"
    },
    {
      title: "NDB Le, GY Tonga, R Mout, et al., \"Cancer Cell Discrimination Using Host-Guest 'Doubled' Arrays\" J. Am. Chem. Soc., 2017, 139, 8008-8012.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:kNdYIx-mwKoC"
    },
    {
      title: "R Mout, M Ray, Y-W Lee, F Scaletti, VM Rotello. \"In Vivo Delivery of CRISPR/Cas9 for Therapeutic Gene Editing: Progress and Challenges\" Bioconjug. Chem., 2017, 28, 880-884.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:3fE2CSJIrl8C"
    },
    {
      title: "R Mout, M Ray, GY Tonga, Y.-W. Lee, T Tray, K Sasaki, VM Rotello. \"Direct Cytoplasmic Delivery of CRISPR/Cas9-Ribonucleoprotein for Efficient Gene Editing\" ACS Nano, 2017, 11, 2452-2458.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:8k81kl-MbHgC"
    },
    {
      title: "R Mout, GY Tonga, L Wang, M Ray, T Roy, VM Rotello. \"Programmed Self-Assembly of Hierarchical Nanostructures through Protein-Nanoparticle Coengineering\" ACS Nano, 2017, 11, 3456-3462.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&citation_for_view=NpMfqDUAAAAJ:MXK_kJrjxJIC"
    },
    {
      title: "K Saha, M Rahimi, M Yazdani, ST Kim, DF Moyano, S Hou, R Das, R Mout, F Rezaee, M Mahmoudi, VM Rotello. \"Regulation of Macrophage Recognition Through the Interplay of Nanoparticle Surface Functionality and Protein Corona\" ACS Nano, 2016, 10, 4421-4430.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:0EnyYjriUFMC"
    },
    {
      title: "S Rana, SG Elci, R Mout, AK Singla, M Yazdani, M Bender, A Bajaj, K Saha, UHF Bunz, FR Jirik, VM Rotello. \"Ratiometric Array of Conjugated Polymers-Fluorescent Protein Provides a Robust Mammalian Cell Sensor\" J. Am. Chem. Soc., 2016, 138, 4522-4529.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:hqOjcs7Dif8C"
    },
    {
      title: "S Rana, ND Le*, R Mout*, K Saha, GY Tonga, RE Bain, OR Miranda, CM Rotello, VM Rotello. \"A Multichannel Nanosensor for Instantaneous Readout of Cancer Drug Mechanisms\" Nature Nanotechnol., 2015, 10, 65-69. (*equal contribution)",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:_FxGoFyzp5QC"
    },
    {
      title: "GY Tonga, Y Jeong, B Duncan, T Mizuhara, R Mout, R Das, ST Kim, YC Yeh, B Yan, S Hou, VM Rotello. \"Supramolecular Regulation of Bioorthogonal Catalysis in Cells using Nanoparticle-Embedded Transition Metal Catalysts\" Nature Chem., 2015, 7, 597-603.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:UebtZRa9Y70C"
    },
    {
      title: "S Rana, NDB Le, R Mout, B Duncan, SG Elci, K Saha, VM Rotello. \"A Multichannel Biosensor for Rapid Determination of Cell Surface Glycomic Signatures\" ACS Cent. Sci., 2015, 1, 191-197.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&cstart=20&pagesize=80&citation_for_view=NpMfqDUAAAAJ:Se3iqnhoufwC"
    },
    {
      title: "CS Kim, R Mout, Y Zhao, YC Yeh, R Tang, Y Jeong, B Duncan, JA Hardy, VM Rotello. \"Co-Delivery of Protein and Small Molecule Therapeutics using Nanoparticle-Stabilized Nanocapsules\" Bioconjug. Chem., 2015, 26, 950-954.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&citation_for_view=NpMfqDUAAAAJ:roLk4NBRz8UC"
    },
    {
      title: "E Jeoung, YC Yeh, T Nelson, T Kushida, LS Wang, R Mout, X Li, K Saha, A Gupta, GY Tonga, JJ Lannutti, VM Rotello. \"Fabrication of Functional Nanofibers through Post‐Nanoparticle Functionalization\" Macromol. Rapid Commun., 2015, 36, 678-683.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:LkGwnXOMwfcC"
    },
    {
      title: "Z Ekmekci, K Saha, DF Moyano, GY Tonga, H Wang, R Mout, VM Rotello. \"Probing the Protein–Nanoparticle Interface: The Role of Aromatic Substitution Pattern on Affinity\" Supramol. Chem., 2015, 27, 123-126.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:W7OEmFMy1HYC"
    },
    {
      title: "Y Jiang, R Tang, B Duncan, Z Jiang, B Yan, R Mout, VM Rotello. \"Direct Cytosolic Delivery of siRNA using Nanoparticle-Stabilized Nanocapsules\" Angew. Chem. Int. Ed. Engl., 2015, 54, 506-510.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&citation_for_view=NpMfqDUAAAAJ:eQOLeE2rZwMC"
    },
    {
      title: "X Li, YC Yeh, K Giri, R Mout, RF Landis, YS Prakash, VM Rotello. \"Control of Nanoparticle Penetration into Biofilms through Surface Design\" Chem. Commun., 2015, 51, 282-285.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&citation_for_view=NpMfqDUAAAAJ:WF5omc3nYNoC"
    },
    {
      title: "X Li, H Kong, R Mout, K Saha, DF Moyano, SM Robinson, S Rana, X Zhang, MA Riley, VM Rotello. \"Rapid Identification of Bacterial Biofilms and Biofilm Wound Models using a Multichannel Nanosensor\" ACS Nano, 2014, 8, 12014-12019.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&citation_for_view=NpMfqDUAAAAJ:ufrVoPGSRksC"
    },
    {
      title: "YC Yeh, R Tang, R Mout, Y Jeong, VM Rotello \"Fabrication of Multiresponsive Bioactive Nanocapsules through Orthogonal Self-Assembly\" Angew. Chem. Int. Ed. Engl., 2014, 53, 5137-5141.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:zYLM7Y9cAGgC"
    },
    {
      title: "R Mout, GY Tonga, M Ray, DF Moyano, Y Xing, VM Rotello \"Environmentally Responsive Histidine-Carboxylate Zipper Formation between Proteins and Nanoparticles\" Nanoscale, 2014, 6, 8873-8877.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:YsMSGLbcyi4C"
    },
    {
      title: "YC Yeh, S Rana, R Mout, B Yan, FS Alfonso, VM Rotello. \"Supramolecular Tailoring of Protein–Nanoparticle Interactions using Cucurbituril Mediators\" Chem Commun., 2014, 50, 5565-5568.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:Tyk-4Ss8FVUC"
    },
    {
      title: "R Mout, VM Rotello. \"Bio and Nano Working Together: Engineering the Protein‐Nanoparticle Interface\" Isr. J. Chem., 2013, 53, 521-529.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:UeHWp8X0CEIC"
    },
    {
      title: "R Tang, CS Kim, DJ Solfiell, S Rana, R Mout, EM Velázquez-Delgado, A Chompoosor, Y Jeong, B Yan, ZJ Zhu, CK Kim, JA Hardy, VM Rotello. \"Direct Delivery of Functional Proteins and Enzymes to the Cytosol using Nanoparticle-Stabilized Nanocapsules\" ACS Nano, 2013, 7, 6667-6673.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&citation_for_view=NpMfqDUAAAAJ:IjCSPb-OGe4C"
    },
    {
      title: "V Nandwana, R Mout, YC Yeh, S Dickert, MT Tuominen, VM Rotello. \"Patterning of Protein/Quantum dot Hybrid Bionanostructures\" J. Inorg. Organomet. Polym. Mater., 2013, 23, 227-232.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:9yKSN-GCB0IC"
    },
    {
      title: "S Rana, AK Singla, A Bajaj, SG Elci, OR Miranda, R Mout, B Yan, FR Jirik, VM Rotello. \"Array-Based Sensing of Metastatic Cells and Tissues using Nanoparticle–Fluorescent Protein Conjugates\" ACS Nano, 2012, 6, 8233-8240.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&citation_for_view=NpMfqDUAAAAJ:d1gkVwhDpl0C"
    },
    {
      title: "R Mout, DF Moyano, S Rana, VM Rotello. \"Surface Functionalization of Nanoparticles for Nanomedicine\" Chem. Soc. Rev., 2012, 41, 2539-2544.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&citation_for_view=NpMfqDUAAAAJ:u-x6o8ySG0sC"
    },
    {
      title: "S Rana, A Bajaj, R Mout, VM Rotello. \"Monolayer Coated Gold Nanoparticles for Delivery Applications\" Adv. Drug. Deliv. Rev., 2012, 64, 200-216.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&citation_for_view=NpMfqDUAAAAJ:u5HHmVD_uO8C"
    },
    {
      title: "R Mout, Z Xu, AK Wolf, VJ Davisson, GK Jarori \"Anti-Malarial Activity of Geldanamycin Derivatives in Mice Infected with Plasmodium yoelii\" Malar J., 2012, 11, 54.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:qjMakFHDy7sC"
    },
    {
      title: "HK Vora, FR Shaik, I Pal-Bhowmick, R Mout, GK Jarori. \"Effect of Deletion of a Plant Like Pentapeptide Insert on Kinetic, Structural and Immunological Properties of Enolase from Plasmodium falciparum\" Arch. Biochem. Biophys., 2009, 485, 128-138",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:2osOgNQ5qMEC"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image - Increased brightness to match homepage */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: `url(${proteinMoleculeBg})`,
        }}
      />
      
      {/* Fixed Black Overlay - Same as homepage */}
      <div className="fixed inset-0 bg-black/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold text-foreground mb-4">Publications</h1>
            <p className="text-xl text-muted-foreground">
              Peer-reviewed research publications in leading scientific journals
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publications.map((publication, index) => (
                <div key={index} className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative">
                  <div className="absolute top-4 left-6 z-10">
                    <span className="text-lg font-bold text-black">
                      {index + 1}
                    </span>
                  </div>
                  <div className="h-full flex flex-col">
                    <div className="flex-1 pt-8">
                      <h3 className="text-base font-medium leading-tight mb-4 line-clamp-6 text-black">
                        {(() => {
                          const titleMatch = publication.title.match(/"([^"]+)"/);
                          if (titleMatch) {
                            const quotedTitle = titleMatch[1];
                            const restOfCitation = publication.title.replace(/"([^"]+)"/, '').trim();
                            return (
                              <>
                                <div className="text-lg font-bold mb-2 text-black">
                                  "{quotedTitle}"
                                </div>
                                <div 
                                  className="text-sm text-gray-700"
                                  dangerouslySetInnerHTML={{ 
                                    __html: makeRubulNameBold(restOfCitation) 
                                  }}
                                />
                              </>
                            );
                          }
                          return (
                            <div 
                              dangerouslySetInnerHTML={{ 
                                __html: makeRubulNameBold(publication.title) 
                              }}
                            />
                          );
                        })()}
                      </h3>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border/30">
                      <div className="flex justify-between items-center">
                        <div>
                          {publication.link === null ? (
                            <span className="text-black text-sm font-medium">
                              Manuscript in Preparation
                            </span>
                          ) : publication.link === "placeholder" ? (
                            <span className="text-gray-700 text-sm font-medium">
                              Placeholder
                            </span>
                          ) : (
                            <a 
                              href={publication.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary-glow transition-colors flex items-center gap-2 text-sm font-medium group"
                              title="View Publication"
                            >
                              <span>View Publication</span>
                              <ExternalLink className="w-4 h-4 group-hover:scale-100 transition-transform" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Final Google Scholar text at bottom */}
            <div className="text-center mt-8">
              <h3 className="font-bold text-lg text-[#f2f2f2] mb-4">
                For the complete list of publications and citations, please see the Google Scholar page{' '}
                <a 
                  href="https://scholar.google.com/citations?user=NpMfqDUAAAAJ&hl=en"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 underline"
                >
                  here
                </a>
                .
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};