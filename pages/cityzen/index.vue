<template>
  <div class="">
    <main id="main">
      <section>
        <div class="wrap">
          <h1>Cityzen</h1>
          <p>An incredible municipal website experience for your community</p>
        </div>
      </section>
      <section>
        <div class="wrap">
          <h2>What's inside</h2>
          <ul>
            <li>1 WordPress theme, 1 child theme and 5 core plugins</li>
            <li>The <a href="https://wpemerge.com" target="_blank">WP Emerge</a> development framework</li>
            <li>Comprehensive documentation</li>
            <li>45 templates</li>
            <li>12 possible layout options</li>
            <li>And so much more! See below &darr;</li>
          </ul>
        </div>
      </section>
      <section>
        <div class="wrap">
          <h2>Under the hood</h2>
          <p>So much more than just a theme, this is a powerful, modern website platform for cities with every feature your citizens might need, presented in a beautiful responsive interface that works securely, quickly and flawlessly on all devices.</p>
        </div>
      </section>
      <section>
        <div class="wrap">
          <h2>Features</h2>
          <div class="grid-features">
            <cityzen_feature_analytics/>
            <cityzen_feature_archives/>
            <cityzen_feature_content_list/>
            <cityzen_feature_directory/>
            <cityzen_feature_events/>
            <cityzen_feature_feeds/>
            <cityzen_feature_filesystem/>
            <cityzen_feature_forms/>
            <cityzen_feature_gutenberg/>
            <cityzen_feature_jobs/>
            <cityzen_feature_listings/>
            <cityzen_feature_newsletters/>
            <cityzen_feature_notifications/>
            <cityzen_feature_optimization/>
            <cityzen_feature_platform/>
            <cityzen_feature_record_requests/>
            <cityzen_feature_representation/>
            <cityzen_feature_responsive_design/>
            <cityzen_feature_search/>
            <cityzen_feature_security/>
            <cityzen_feature_translations/>
            <cityzen_feature_user_accounts/>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  import cityzen_feature_search from '~/components/products/cityzen/features/search.vue'
  import cityzen_feature_analytics from '~/components/products/cityzen/features/analytics.vue'
  import cityzen_feature_directory from '~/components/products/cityzen/features/directory.vue'
  import cityzen_feature_content_list from '~/components/products/cityzen/features/content_list.vue'
  import cityzen_feature_events from '~/components/products/cityzen/features/events.vue'
  import cityzen_feature_feeds from '~/components/products/cityzen/features/feeds.vue'
  import cityzen_feature_filesystem from '~/components/products/cityzen/features/filesystem.vue'
  import cityzen_feature_forms from '~/components/products/cityzen/features/forms.vue'
  import cityzen_feature_gutenberg from '~/components/products/cityzen/features/gutenberg.vue'
  import cityzen_feature_jobs from '~/components/products/cityzen/features/jobs.vue'
  import cityzen_feature_listings from '~/components/products/cityzen/features/listings.vue'
  import cityzen_feature_newsletters from '~/components/products/cityzen/features/newsletters.vue'
  import cityzen_feature_notifications from '~/components/products/cityzen/features/notifications.vue'
  import cityzen_feature_optimization from '~/components/products/cityzen/features/optimization.vue'
  import cityzen_feature_platform from '~/components/products/cityzen/features/platform.vue'
  import cityzen_feature_responsive_design from '~/components/products/cityzen/features/responsive_design.vue'
  import cityzen_feature_record_requests from '~/components/products/cityzen/features/record_requests.vue'
  import cityzen_feature_user_accounts from '~/components/products/cityzen/features/user_accounts.vue'
  import cityzen_feature_representation from '~/components/products/cityzen/features/representation.vue'
  import cityzen_feature_translations from '~/components/products/cityzen/features/translations.vue'
  import cityzen_feature_archives from '~/components/products/cityzen/features/archives.vue'
  import cityzen_feature_security from '~/components/products/cityzen/features/security.vue'
  export default {
    components: {
      cityzen_feature_search,
      cityzen_feature_analytics,
      cityzen_feature_directory,
      cityzen_feature_content_list,
      cityzen_feature_events,
      cityzen_feature_feeds,
      cityzen_feature_filesystem,
      cityzen_feature_forms,
      cityzen_feature_gutenberg,
      cityzen_feature_jobs,
      cityzen_feature_listings,
      cityzen_feature_newsletters,
      cityzen_feature_notifications,
      cityzen_feature_optimization,
      cityzen_feature_platform,
      cityzen_feature_responsive_design,
      cityzen_feature_record_requests,
      cityzen_feature_user_accounts,
      cityzen_feature_representation,
      cityzen_feature_translations,
      cityzen_feature_archives,
      cityzen_feature_security
    },
    layout: 'theme',
    head: {
      title: 'Cityzen',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'An incredible municipal website experience for your community'
        }
      ]
    }
  }
</script>
