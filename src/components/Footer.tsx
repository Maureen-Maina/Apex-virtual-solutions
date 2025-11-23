import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Apex Virtual Solutions</h3>
            <p className="text-muted-foreground">
              Reliable, professional virtual support & academic tutoring worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="/virtual-assistance" className="text-muted-foreground hover:text-primary transition-colors">Virtual Assistance</a></li>
              <li><a href="/tutoring" className="text-muted-foreground hover:text-primary transition-colors">Tutoring Services</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2">
              <a 
                href="mailto:apex.virtualdesk@gmail.com" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                apex.virtualdesk@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                PayPal: apex.virtualdesk@gmail.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Apex Virtual Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
