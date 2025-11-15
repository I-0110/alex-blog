import Footer from '@/app/ui/footer';

export default function DashboardLayout({ 
      children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}