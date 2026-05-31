export default function NeighbourhoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Fills the pt-20 gap from the parent layout so the charcoal
          header meets the navbar instead of showing a cream strip */}
      <div className="bg-charcoal h-20 -mt-20" aria-hidden="true" />
      {children}
    </>
  );
}
