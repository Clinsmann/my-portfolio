export const Footer = () => {
  return (
    <footer className="py-8 border-t bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Hillary Ibeanu. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
