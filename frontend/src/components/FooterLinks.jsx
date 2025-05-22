const FooterLinks = () => {
    const sections = [
      {
        title: "Coworking Spaces in India",
        cities: [
          "Gurgaon", "Bangalore", "Mumbai", "Delhi", "Noida", "Hyderabad", "Pune", "Ahmedabad", "Indore", "Chennai", "Jaipur",
          "Kochi", "Chandigarh", "Lucknow", "Kolkata", "Coimbatore", "Goa", "Bhubaneswar", "Faridabad", "Guwahati", "Dehradun",
          "Jodhpur", "Ludhiana", "Patna", "Raipur", "Surat", "Trivandrum", "Vadodara",
        ],
        prefix: "Coworking Space in ",
      },
      
      {
        title: "Virtual Offices in India",
        cities: [
          "Gurgaon", "Bangalore", "Mumbai", "Delhi", "Noida", "Hyderabad", "Pune", "Ahmedabad", "Indore", "Chennai", "Jaipur",
          "Kochi", "Bhubaneswar", "Coimbatore", "Chandigarh", "Goa", "Kolkata", "Guwahati", "Dehradun", "Calicut", "Mohali",
          "Visakhapatnam", "Faridabad", "Bhopal", "Ernakulam", "Ludhiana", "Nagpur", "Patna", "Raipur", "Surat", "Trivandrum", "Vadodara",
        ],
        prefix: "Virtual office in ",
      },
      {
        title: "Office Spaces in India",
        cities: [
          "Gurgaon", "Bangalore", "Mumbai", "Delhi", "Noida", "Hyderabad", "Pune",
        ],
        prefix: "Office Space in ",
      },
    ];
  
    return (
      <footer className="bg-white border-t pt-10 pb-4 text-gray-800 text-sm px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-2">{section.title}</h3>
              <p className="leading-relaxed text-gray-600">
                {section.cities.map((city, index) => (
                  <span key={index}>
                    {section.prefix}{city}
                    {index < section.cities.length - 1 && " • "}
                  </span>
                ))}
              </p>
            </div>
          ))}
  
          {/* Footer bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t text-xs text-gray-500">
            <p>Copyright © 2025 Findurspace. All rights reserved</p>
            <p className="mt-2 md:mt-0">
              Findurspace is a registered brand. <span className="font-semibold">| T&C</span>
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterLinks;
  