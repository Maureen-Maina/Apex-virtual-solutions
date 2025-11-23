import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Briefcase, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-cream/30 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-6 leading-tight animate-fade-in">
            Reliable, professional virtual support & academic tutoring worldwide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Expert online assistance for businesses, adult learners, and students preparing for GED, HESI, and TEAS exams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              onClick={() => navigate("/virtual-assistance")}
              className="text-lg px-8 py-6"
            >
              Get Virtual Assistance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/tutoring")}
              className="text-lg px-8 py-6"
            >
              Explore Tutoring
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4">How I Can Support You</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional services designed to help you achieve your goals with confidence and clarity.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <ServiceCard
              icon={Briefcase}
              title="Virtual Assistance Services"
              description="Streamline your workflow with reliable administrative support"
              items={[
                "Admin support & data entry",
                "Email & calendar management",
                "Digital organization",
                "Client communication",
              ]}
            />
            
            <ServiceCard
              icon={GraduationCap}
              title="Academic Tutoring Services"
              description="Build confidence with personalized exam preparation"
              items={[
                "GED tutoring",
                "HESI tutoring",
                "TEAS tutoring",
                "Study guides & practice questions",
              ]}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              onClick={() => navigate("/virtual-assistance")}
            >
              View Full Services
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/tutoring")}
            >
              Explore Tutoring
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">About Apex Virtual Solutions</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Apex Virtual Solutions provides dedicated virtual support and academic tutoring designed to help 
            individuals and businesses stay organized, productive, and confident. With a commitment to 
            professionalism, reliability, and clear communication, I bring both structure and support to your goals.
          </p>
          <Button onClick={() => navigate("/about")}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground mb-4 italic">
                  "Extremely reliable and always professional… made my workflow so easy. Apex Virtual Solutions 
                  has been an invaluable partner in keeping my business organized."
                </p>
                <p className="font-semibold text-foreground">— Business Owner</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground mb-4 italic">
                  "The TEAS tutoring was a game-changer! I finally understood concepts I had struggled with. 
                  The personalized approach made all the difference in my exam preparation."
                </p>
                <p className="font-semibold text-foreground">— Nursing Student</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-primary-foreground">Ready to get started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's work together to make your goals achievable and stress-free.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate("/contact")}
            className="text-lg px-8 py-6"
          >
            Contact Me
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
