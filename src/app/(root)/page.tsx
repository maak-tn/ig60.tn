import ComparisonSection from '@/components/ComparisonSection'
import CTASection from '@/components/CTASection'
import FeaturesSection from '@/components/FeaturesSection'
import HeroSection from '@/components/HeroSection'
import IntegrationSection from '@/components/IntegrationSection'
import PaymentsSection from '@/components/PaymentSection'
import PricingSection from '@/components/PricingSection'
import StatsSection from '@/components/StatsSection'
import Head from 'next/head'
import React from 'react'

function page() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>IG60 - Créez votre boutique en ligne</title>
                <meta name="description" content="Créez votre boutique en ligne sans coder avec IG60" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <IntegrationSection />
            <ComparisonSection />
            <PaymentsSection />
            <PricingSection />
            <CTASection />
        </div>
    )
}

export default page