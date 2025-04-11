import React from 'react';
import { Github, Mail, Linkedin, Terminal, Container, GitBranch, Workflow } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 flex justify-center">
              <Terminal size={64} className="text-green-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-center">
              Kacper Stojczyk
            </h1>
            <p className="text-xl md:text-2xl text-green-500 font-mono mb-8 text-center">
              Toegepaste Informatica Student
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://github.com" className="text-gray-400 hover:text-green-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-green-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:kacperstojczyk@gmail.com" className="text-gray-400 hover:text-green-500 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-mono font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-800 p-6 rounded-lg text-center">
              <Container size={32} className="mx-auto mb-4 text-green-500" />
              <h3 className="font-mono font-bold mb-4">Container Orchestration</h3>
              <ul className="text-gray-400 font-mono text-sm space-y-2">
                <li>Kubernetes</li>
                <li>Container Management</li>
                <li>Pod Orchestration</li>
                <li>Service Mesh</li>
              </ul>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg text-center">
              <GitBranch size={32} className="mx-auto mb-4 text-green-500" />
              <h3 className="font-mono font-bold mb-4">Infrastructure as Code</h3>
              <ul className="text-gray-400 font-mono text-sm space-y-2">
                <li>Terraform</li>
                <li>Infrastructure Provisioning</li>
                <li>Resource Management</li>
                <li>State Management</li>
              </ul>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg text-center">
              <Workflow size={32} className="mx-auto mb-4 text-green-500" />
              <h3 className="font-mono font-bold mb-4">CI/CD</h3>
              <ul className="text-gray-400 font-mono text-sm space-y-2">
                <li>Pipeline Automation</li>
                <li>Continuous Integration</li>
                <li>Continuous Deployment</li>
                <li>Build Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-mono font-bold mb-8">Contact</h2>
            <p className="text-gray-400 font-mono text-sm mb-8">
              I'm passionate about infrastructure automation and cloud-native technologies.
              Feel free to reach out for collaborations or discussions.
            </p>
            <a 
              href="mailto:kacperstojczyk@gmail.com"
              className="inline-block border border-green-500 text-green-500 font-mono px-8 py-3 rounded hover:bg-green-500 hover:text-black transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="font-mono text-sm">© {new Date().getFullYear()} Kacper Stojczyk</p>
        </div>
      </footer>
    </div>
  );
}

export default App;