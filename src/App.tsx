import React from 'react';
import { Github, Linkedin, Mail, Cloud, Server, Terminal, Code, Container } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-950 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kacper Stojczyk</h1>
            <p className="text-xl text-slate-300 mb-8">Passionate about building scalable infrastructure and automating everything.</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/KacperStojczykPXL" className="hover:text-slate-300 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/kacperstojczyk/" className="hover:text-slate-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:kacperstojczyk@gmail.com" className="hover:text-slate-300 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">About Me</h2>
            <div className="bg-slate-800 rounded-lg shadow-lg p-8 shadow-slate-950/50">
              <p className="text-lg text-slate-300 mb-6">
                Applied Computer Science student specializing in cloud-native technologies and infrastructure automation. 
                I'm passionate about automation, container orchestration, and building resilient systems.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3"
                alt="Data Center"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SkillCard 
              icon={<Cloud className="w-8 h-8" />}
              title="Cloud Platforms"
              skills={['AWS', 'Google Cloud']}
            />
            <SkillCard 
              icon={<Container className="w-8 h-8" />}
              title="Container Orchestration"
              skills={['Kubernetes', 'Docker', 'Helm']}
            />
            <SkillCard 
              icon={<Code className="w-8 h-8" />}
              title="Infrastructure as Code"
              skills={['Terraform', 'CloudFormation']}
            />
            <SkillCard 
              icon={<Terminal className="w-8 h-8" />}
              title="DevOps Tools"
              skills={['GitHub', 'GitLab', 'ArgoCD']}
            />
            <SkillCard 
              icon={<Server className="w-8 h-8" />}
              title="Monitoring"
              skills={['Prometheus', 'Grafana', 'Datadog']}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Kacper Stojczyk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="bg-slate-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow shadow-slate-950/50">
      <div className="text-slate-300 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-slate-300">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;