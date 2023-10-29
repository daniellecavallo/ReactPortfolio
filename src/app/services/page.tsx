import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ServiceSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Service',
  description:
    'What we do',
}

export default function Service() {
  return (
    <SimpleLayout
      title="We love what we do."
      intro="And that's bringing your dreams to reality. Whether you're just getting started on the next big thing, or you want to take your business to the next level, we're here to help. "
    >
      <div className="space-y-20">
        <ServiceSection title="Web Development">
          <Appearance
            href="mailto:thecavallocompany@gmail.com"
            title="Personal Websites"
            description="Need a personal web presence? Looking to grow a following with a blog, or maybe you need a portfolio to showcase your work? The Cavallo Company can ensure you stand out from the crowd."
            event="Your time to shine"
            cta="Contact us to find out more"
          />
          <Appearance
            href="mailto:thecavallocompany@gmail.com"
            title="Small Business Site"
            description="You've built a business, and want it to grow. Let us help you expand your reach and your audience with our custom built sites and comprehensive marketing packages."
            event="Get the word out"
            cta="Contact us to find out more"
          />
           <Appearance
            href="mailto:thecavallocompany@gmail.com"
            title="Search Engine Optimization / SEO"
            description="Have a site, but not sure it's getting the traffic it deserves? With our knowledge and experience in SEO, we can help make sure your site has the reach you need."
            event="Move on up in the (google) world"
            cta="Contact us to find out more"
          />
           <Appearance
            href="mailto:thecavallocompany@gmail.com"
            title="E-Commerce Integration"
            description="Looking to integrate payments or a storefront into your site? We've got you covered."
            event="Let people see what you've got in store"
            cta="Contact us to find out more"
          />
        </ServiceSection>
        <ServiceSection title="Packages">
          <Appearance
            href="mailto:thecavallocompany@gmail.com"
            title="PWA with Application"
            description="Want your site to be at the cutting edge of design, without the hassle of dealing with an app store? Our PWA with Application package will get you up and running."
            event="On the go and online"
            cta="Contact us to find out more"
          />
          <Appearance
            href="mailto:thecavallocompany@gmail.com"
            title="Website Maintenance and Support"
            description="Run your site worry free with our ongoing maintenance package, ensuring your site has everything it needs to keep thriving."
            event="Let us sweat the big stuff."
            cta="Contact us to find out more"
          />
          <Appearance
            href="mailto:thecavallocompany@gmail.com"
            title="Emergency Tech Support"
            description="A site outage is one of the most stressful things a business owner can have happen, no matter the cause. With our Emergency Tech Support package, we fight the fires so you don't have to, so you can get back online and doing what you best."
            event="Your very own team of DevOps ninjas"
            cta="Contact us to find out more"
          />
        </ServiceSection>
      </div>
    </SimpleLayout>
  )
}
