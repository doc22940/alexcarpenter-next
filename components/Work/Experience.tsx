import Stack from '@/components/Stack';
import Section from '@/components/Section';

export default function Experience() {
  return (
    <Section>
      <Section.Title>Experience</Section.Title>
      <Stack>
        <Stack.Item>
          <h3 className="text-xl font-bold">NationBuilder</h3>
          <p className="mt-1 text-gray-600">UI Engineer • Nov 2018 - Present</p>
          <ul className="mt-2 list-disc pl-4">
            <li>
              Maintain and implement new features within our design system
              Radius.
            </li>
            <li>
              Implement new components and features using React, Redux, and
              React Router.
            </li>
            <li>
              Implement marketing landing pages for different product verticals.
            </li>
          </ul>
        </Stack.Item>

        <Stack.Item>
          <h3 className="text-xl font-bold">Mighty in the Midwest</h3>
          <p className="mt-1 text-gray-600">
            Senior Developer • Oct 2015 - Nov 2018
          </p>
          <ul className="mt-2 list-disc pl-4">
            <li>
              Architected solutions and estimate project scope for new and
              existing client features.
            </li>
            <li>
              Introduced modern Javascript practices with Webpack and Rollup.
            </li>
          </ul>
        </Stack.Item>

        <Stack.Item>
          <h3 className="text-xl font-bold">Masuga Design</h3>
          <p className="mt-1 text-gray-600">
            Front-end Developer • Feb 2012 - Oct 2015
          </p>
          <ul className="mt-2 list-disc pl-4">
            <li>Designed and developed a SaaS app built on Laravel.</li>
            <li>
              Developed mobile-first front-end templates for clients such as FOX
              Networks Info and A+E Networks Affiliates.
            </li>
          </ul>
        </Stack.Item>
      </Stack>
    </Section>
  );
}
