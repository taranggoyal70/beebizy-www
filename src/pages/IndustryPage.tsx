import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import IndustryMenu from "@/components/IndustryMenu";
import { INDUSTRIES } from "./industries";

export default function IndustryPage({ id }: { id: string }) {
  const industry = INDUSTRIES.find(item => item.id === id);
  useEffect(() => {
    const previous = document.title;
    document.title = industry ? `${industry.label} | Beebizy` : "Industries | Beebizy";
    return () => { document.title = previous; };
  }, [industry]);

  if (!industry) return <main className="mx-auto max-w-3xl px-6 py-20"><h1 className="text-3xl font-bold">Choose your industry</h1><ul className="mt-6 space-y-4">{INDUSTRIES.map(item => <li key={item.id}><Link href={`/industries/${item.id}`} className="font-semibold underline">{item.label}</Link></li>)}</ul><Link href="/" className="mt-8 inline-block underline">Back to Beebizy</Link></main>;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-primary/25 bg-background/95 backdrop-blur">
        <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-3 lg:px-10">
          <Link href="/" aria-label="Beebizy home"><BrandLogo size="lg" /></Link>
          <nav aria-label="Website navigation" className="flex items-center gap-3">
            <IndustryMenu />
            <Button asChild><a href="/?sales=1">Book a Free Demo</a></Button>
          </nav>
        </div>
      </header>
      <main>
        <section className="border-b border-primary/25 bg-primary-wash">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-10 lg:pb-24">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"><ArrowLeft className="size-4" aria-hidden="true" />Beebizy</Link>
            <p className="mt-12 text-sm font-bold uppercase tracking-[0.16em]">{industry.label}</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">{industry.headline}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">{industry.introduction}</p>
            <Button asChild size="lg" className="mt-8"><a href="/?sales=1">Book a Free Demo<ArrowRight className="ml-2 size-4" aria-hidden="true" /></a></Button>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10 lg:py-20">
          <div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight">{industry.heading}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">{industry.body}</p>
          </div>
          <div className="rounded-3xl border border-primary/35 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-bold">What {industry.label === "SMBs" ? "businesses" : industry.label.toLowerCase()} use Beebizy for</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">{industry.uses.map(use => <li key={use} className="flex items-start gap-3 text-sm leading-6"><Check className="mt-1 size-4 shrink-0" aria-hidden="true" /><span>{use}</span></li>)}</ul>
          </div>
        </section>
        {industry.proof ? <section className="border-y border-primary/25 bg-primary/10"><div className="mx-auto grid max-w-7xl gap-5 px-6 py-10 lg:grid-cols-[1fr_2fr] lg:px-10"><h2 className="text-lg font-bold">{industry.proofLabel}</h2><p className="max-w-3xl text-lg leading-8">{industry.proof}</p></div></section> : null}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <h2 className="text-3xl font-bold tracking-tight">More time for your event</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">{industry.benefits.map(benefit => <li key={benefit} className="rounded-2xl border border-hairline bg-white px-6 py-5 text-base font-semibold">{benefit}</li>)}</ul>
        </section>
        <section className="border-y border-primary/30 bg-primary-wash"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center lg:px-10"><h2 className="max-w-2xl text-3xl font-bold tracking-tight">{industry.cta}</h2><Button asChild size="lg"><a href="/?sales=1">Book a Free Demo<ArrowRight className="ml-2 size-4" aria-hidden="true" /></a></Button></div></section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3 px-6 py-8 text-sm text-muted-foreground lg:px-10"><Link href="/" className="font-bold text-foreground">Beebizy</Link><Link href="/about">About us</Link>{INDUSTRIES.map(item => <Link key={item.id} href={`/industries/${item.id}`}>{item.label}</Link>)}</footer>
    </div>
  );
}
