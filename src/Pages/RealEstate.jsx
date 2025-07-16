import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Search,
  Phone,
  Mail,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Star,
  Play,
  User,
  Menu,
  X,
  Filter,
  ChevronDown,
} from "lucide-react";

const RealEstateWebsite = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    priceRange: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
    location: "",
  });

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: 850000,
      location: "Downtown Manhattan, NY",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      ],
      type: "Apartment",
      featured: true,
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      price: 1250000,
      location: "Beverly Hills, CA",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      images: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      ],
      type: "Villa",
      featured: true,
    },
    {
      id: 3,
      title: "Cozy Suburban Home",
      price: 480000,
      location: "Austin, TX",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&h=600&fit=crop",
      ],
      type: "House",
      featured: false,
    },
  ];

  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      phone: "(555) 123-4567",
      email: "sarah@realestate.com",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b84a1a88?w=300&h=300&fit=crop",
      properties: 125,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Property Specialist",
      phone: "(555) 234-5678",
      email: "michael@realestate.com",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      properties: 98,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "Luxury Home Expert",
      phone: "(555) 345-6789",
      email: "emma@realestate.com",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      properties: 87,
      rating: 4.9,
    },
  ];

  // Image slider component
  const ImageSlider = ({ images, className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div className={`relative group ${className}`}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex
                      ? "bg-white"
                      : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <button className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart size={18} />
        </button>
      </div>
    );
  };

  // Property card component
  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <ImageSlider images={property.images} className="h-64" />

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">
            {property.title}
          </h3>
          {property.featured && (
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
              Featured
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-4 flex items-center">
          <MapPin size={16} className="mr-1" />
          {property.location}
        </p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <Bed size={16} className="mr-1" />
              {property.bedrooms} bed
            </span>
            <span className="flex items-center">
              <Bath size={16} className="mr-1" />
              {property.bathrooms} bath
            </span>
            <span className="flex items-center">
              <Square size={16} className="mr-1" />
              {property.area} sqft
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            ${property.price.toLocaleString()}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  // Agent card component
  const AgentCard = ({ agent }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={agent.image}
        alt={agent.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {agent.name}
        </h3>
        <p className="text-gray-600 mb-4">{agent.title}</p>

        <div className="flex items-center mb-3">
          <Star className="text-yellow-500 mr-1" size={16} />
          <span className="text-sm text-gray-600">
            {agent.rating} • {agent.properties} properties sold
          </span>
        </div>

        <div className="space-y-2">
          <a
            href={`tel:${agent.phone}`}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <Phone size={16} className="mr-2" />
            {agent.phone}
          </a>
          <a
            href={`mailto:${agent.email}`}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <Mail size={16} className="mr-2" />
            {agent.email}
          </a>
        </div>
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Contact Agent
        </button>
      </div>
    </div>
  );

  // Navigation component
  const Navigation = () => (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Home className="text-blue-600" size={24} />
            <span className="text-2xl cursor-pointer  font-bold text-gray-900">
              Nexus RealEstate
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {["home", "properties", "agents", "about", "contact"].map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`capitalize cursor-pointer font-medium transition-colors ${
                    currentPage === page
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {["home", "properties", "agents", "about", "contact"].map(
              (page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 capitalize text-gray-700 hover:text-blue-600"
                >
                  {page}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );

  // Search filters component
  const SearchFilters = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchFilters.location}
            onChange={(e) =>
              setSearchFilters({ ...searchFilters, location: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchFilters.priceRange}
            onChange={(e) =>
              setSearchFilters({ ...searchFilters, priceRange: e.target.value })
            }
          >
            <option value="">Any Price</option>
            <option value="0-500000">$0 - $500K</option>
            <option value="500000-1000000">$500K - $1M</option>
            <option value="1000000+">$1M+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bedrooms
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchFilters.bedrooms}
            onChange={(e) =>
              setSearchFilters({ ...searchFilters, bedrooms: e.target.value })
            }
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Type
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchFilters.propertyType}
            onChange={(e) =>
              setSearchFilters({
                ...searchFilters,
                propertyType: e.target.value,
              })
            }
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="condo">Condo</option>
          </select>
        </div>

        <div className="flex items-end">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
            <Search size={18} className="mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );

  // Home page component
  const HomePage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop')",
          }}
        ></div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Find Your Dream Home</h1>
            <p className="text-xl mb-8">
              Discover the perfect property with our extensive listings and
              expert agents
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Searching
            </button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Find Your Perfect Property
          </h2>
          <SearchFilters />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties
              .filter((p) => p.featured)
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Virtual Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative group">
                <img
                  src={`https://images.unsplash.com/photo-${
                    i === 1
                      ? "1560518883-ce09059eeffa"
                      : i === 2
                      ? "1613490493576-7fde63acd811"
                      : "1568605114967-8130f3a36994"
                  }?w=400&h=300&fit=crop`}
                  alt={`Virtual tour ${i}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <button className="bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition-colors">
                    <Play size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Agents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // Properties page component
  const PropertiesPage = () => (
    <div className="pt-20 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">All Properties</h1>
        <div className="mb-8">
          <SearchFilters />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );

  // Agents page component
  const AgentsPage = () => (
    <div className="pt-20 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Agents</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );

  // About page component
  const AboutPage = () => (
    <div className="pt-20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">About Nexus RealEstate</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We are dedicated to making real estate transactions simple,
                transparent, and successful for everyone involved. With years of
                experience in the industry, we provide exceptional service and
                expert guidance to help you find your perfect property.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Expert local market knowledge</li>
                <li>• Personalized service and attention</li>
                <li>• Advanced technology and tools</li>
                <li>• Proven track record of success</li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="About us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Our Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Properties Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Expert Agents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Contact page component
  const ContactPage = () => (
    <div className="pt-20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-3" size={20} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-3" size={20} />
                  <span>info@realestatepro.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-3" size={20} />
                  <span>123 Main Street, City, State 12345</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 10:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Footer component
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="text-blue-600" size={24} />
              <span className="text-xl font-bold">Nexus RealEstate</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect property. Professional
              service, expert guidance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Agents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Buy Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sell Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Market Analysis
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>(555) 123-4567</li>
              <li>info@realestatepro.com</li>
              <li>
                123 Main Street
                <br />
                City, State 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Nexus RealEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  // Main render
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "properties":
        return <PropertiesPage />;
      case "agents":
        return <AgentsPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default RealEstateWebsite;
