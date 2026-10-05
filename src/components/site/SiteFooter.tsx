import { Link } from "@tanstack/react-router";
const links = [["Destinations","/destinations"],["Rent A Camp","/rent-a-camp"],["Tours","/tours"],["Rural Stay","/rural-stay"],["About","/about"],["FAQ","/faq"],["Plan A Trip","/plan-trip"]] as const;
export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-brand"><span>RURAL</span><span>CAMPS</span><p>Outdoor Odisha, made easy.</p></div><nav aria-label="Footer navigation">{links.map(([label,to]) => <Link key={to} to={to}>{label}</Link>)}</nav><div className="footer-meta"><p>Odisha, India</p><a href="https://www.instagram.com/rural__camps" target="_blank" rel="noreferrer">Instagram ↗</a><p>© {new Date().getFullYear()} Rural Camps</p></div></footer>;
}
