
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="sticky-header bg-white/80 backdrop-blur-lg shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-heading uppercase tracking-wider text-2xl text-foreground">
            Agniveer Ascent
          </Link>
          <Link href="/" className="solid-button font-bold py-2 px-4 rounded-lg text-sm">
            &larr; Back to Home
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-heading font-bold mb-4">Terms of Service for Agniveer Ascent</h1>
          <p className="text-muted-foreground mb-8">Last updated: July 01, 2025</p>

          <p className="mb-6">
            Welcome to Agniveer Ascent. These Terms of Service ("Terms") govern your use of the Agniveer Ascent website and services ("Service"), operated by us. Please read these Terms carefully before using our Service.
          </p>
          
          <h2 className="text-2xl font-bold mt-6 mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-3">2. Use of the Service</h2>
          <p className="mb-4">
            Agniveer Ascent provides a platform for users to take quizzes on various subjects. The Service is intended for your personal, non-commercial use only. You agree not to misuse the Service or help anyone else to do so.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-3">3. User Conduct</h2>
          <p className="mb-4">
            You agree to use the Service in a lawful and respectful manner. You will not:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Engage in any form of cheating or academic dishonesty.</li>
            <li>Attempt to disrupt or interfere with the security or integrity of the Service.</li>
            <li>Use the Service for any illegal purpose or in violation of any local, state, national, or international law.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-3">4. Intellectual Property</h2>
          <p className="mb-4">
            All content included on the Service, such as text, graphics, logos, icons, questions, and software, is the property of Agniveer Ascent or its content suppliers and is protected by Indian and international copyright laws. Unauthorized use of this material is prohibited.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-3">5. Disclaimers</h2>
          <p className="mb-4">
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Agniveer Ascent makes no warranties, expressed or implied, and hereby disclaims all other warranties, including without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property. We do not warrant that the information provided in the quizzes is accurate, complete, or current.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-3">6. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall Agniveer Ascent or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we have been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-3">7. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-3">8. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-3">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="list-disc list-inside space-y-2">
             <li>By email: <a href="mailto:rcwcaps@gmail.com" className="text-primary hover:underline">rcwcaps@gmail.com</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
