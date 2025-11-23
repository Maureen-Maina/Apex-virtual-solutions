import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      title: "Reliability",
      description: "Consistent, timely, dependable support you can count on",
    },
    {
      title: "Professionalism",
      description: "Clear communication and organized processes",
    },
    {
      title: "Confidentiality",
      description: "Respect for sensitive information and privacy",
    },
    {
      title: "Supportive Approach",
      description: "Encouraging, patient, student- and client-centered",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 animate-fade-in">About Apex Virtual Solutions</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <p className="text-lg leading-relaxed">
            Apex Virtual Solutions is a global remote services provider offering expert virtual assistance 
            and academic tutoring support. Whether helping businesses with daily operations or guiding students 
            through GED, HESI, and TEAS preparation, the focus remains the same: professionalism, clarity, 
            and dependable support.
          </p>
          
          <p className="text-lg leading-relaxed">
            With a foundation built on trust, confidentiality, and high-quality service, Apex Virtual Solutions 
            helps clients stay organized, productive, and confident. I combine strong communication skills, 
            digital expertise, and a supportive approach to deliver solutions that make life easier—both 
            academically and professionally.
          </p>
        </div>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="mb-8">Core Values</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button 
            size="lg" 
            onClick={() => navigate("/virtual-assistance")}
          >
            Explore Virtual Assistance
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate("/tutoring")}
          >
            Explore Tutoring
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
