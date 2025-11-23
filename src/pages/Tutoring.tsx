import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Brain, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Tutoring = () => {
  const navigate = useNavigate();

  const programs = [
    {
      icon: BookOpen,
      title: "GED Tutoring",
      description: "Comprehensive preparation for the General Educational Development test",
      subjects: [
        "Math",
        "English Language Arts (reading & writing)",
        "Social studies",
        "Science",
        "Practice tests + review",
        "Personalized study plans",
      ],
      outcome: "Build strong understanding and exam confidence.",
    },
    {
      icon: Brain,
      title: "HESI Exam Tutoring",
      description: "Focused preparation for the Health Education Systems, Inc. entrance exam",
      subjects: [
        "Anatomy & physiology",
        "Math",
        "Grammar & reading",
        "Vocabulary",
        "Nursing-focused study strategies",
        "High-yield topics breakdown",
      ],
      outcome: "Understand key concepts and improve test performance.",
    },
    {
      icon: GraduationCap,
      title: "TEAS Exam Tutoring",
      description: "Targeted support for the Test of Essential Academic Skills",
      subjects: [
        "Math",
        "Reading comprehension",
        "Science (A&P, biology basics)",
        "English & language usage",
        "Realistic practice questions",
        "Concept breakdowns + step-by-step explanations",
      ],
      outcome: "Strengthen weak areas and build confidence for nursing entry exams.",
    },
  ];

  const studySupport = [
    "Custom study guides",
    "Practice questions",
    "Test-taking strategies",
    "Progress tracking",
    "Weekly check-ins (optional)",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="mb-6">Academic Tutoring & Exam Prep</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Apex Virtual Solutions offers personalized tutoring for GED, HESI, and TEAS students. 
            Whether you're returning to school, preparing for nursing programs, or strengthening foundational 
            skills, I provide patient, structured, and supportive guidance tailored to your level.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="animate-fade-in border-2 hover:border-primary/20 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <program.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What We'll Cover:</h4>
                    <ul className="space-y-2">
                      {program.subjects.map((subject, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Outcome:</h4>
                    <p className="text-muted-foreground">{program.outcome}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-16 bg-secondary/30 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <CardHeader>
            <CardTitle className="text-2xl">Study Support Services</CardTitle>
            <CardDescription>Additional resources to enhance your learning experience</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {studySupport.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="mb-4 text-primary-foreground">Ready to start your study journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's work together to get you exam-ready and confident in your abilities.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate("/contact")}
            className="text-lg px-8 py-6"
          >
            Contact for Tutoring
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tutoring;
