
/*
 * =================================================================
 * ARCHIVO: app/page.tsx
 * INSTRUCTIONS: This is the new version of the page, adapted to
 * showcase ArgenSource content while using the original template's
 * components and structure, as per the file you provided.
 * =================================================================
 */
import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { LinkStatus } from '#/ui/link-status';
import Link from 'next/link';
import React from 'react';


// We create a mock function to replace db.demo.findMany() for this page,
// so we can inject our own content without modifying the template's db library.
const getArgenSourceSections = () => {
    return [
        {
            name: 'Core Platform Features',
            items: [
                {
                    name: 'Capability-Driven Search',
                    slug: 'capability-search',
                    description: 'Find suppliers based on their certified processes, not just products.',
                },
                {
                    name: 'Advanced RFQ Management',
                    slug: 'rfq-management',
                    description: 'Create, send, and compare quotes in a streamlined workflow.',
                },
                {
                    name: 'Supplier Directory',
                    slug: 'supplier-directory',
                    description: 'Explore detailed profiles of industrial suppliers across the country.',
                },
            ],
        },
        {
            name: 'Trust & Verification',
            items: [
                {
                    name: 'Verified Suppliers Program',
                    slug: 'verified-suppliers',
                    description: 'Connect with providers who passed our on-site and documentary verification.',
                },
                {
                    name: 'Community-Based Reviews',
                    slug: 'community-reviews',
                    description: 'Read feedback from other industrial buyers on completed transactions.',
                },
            ],
        },
    ];
};

export default function Page() {
  const argenSourceSections = getArgenSourceSections();
  return (
    <Boundary
      label="ArgenSource Proposal"
      animateRerendering={false}
      kind="solid"
      className="flex flex-col gap-9"
    >
      <div className="prose prose-invert">
        <h1 className="text-3xl font-bold">Source Information for Advanced Industries</h1>
        <p>
          Welcome to the ArgenSource project. This platform is designed to connect industrial sourcing needs with the right suppliers through a unique, capability-driven classification system. Below are the core concepts we are developing.
        </p>
      </div>

      {argenSourceSections.map((section) => {
        return (
          <div key={section.name} className="flex flex-col gap-3">
            <div className="font-mono text-xs font-semibold tracking-wider text-gray-700 uppercase">
              {section.name}
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {section.items.map((item) => {
                return (
                  <Link
                    href={`/${item.slug}`}
                    key={item.name}
                    className="group flex flex-col gap-1 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                  >
                    <div className="flex items-center justify-between font-medium text-gray-200 group-hover:text-gray-50">
                      {item.name} <LinkStatus />
                    </div>

                    {item.description ? (
                      <div className="line-clamp-3 text-[13px] text-gray-500 group-hover:text-gray-300">
                        {item.description}
                      </div>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </Boundary>
  );
}
