<template>
  <aside class="timeline" :class="{ 'timeline--expanded': isExpanded }" role="complementary" aria-label="Patient appointment timeline">
    <div class="timeline__header">
      <img src="/images/timeline-ico/arrows.svg" alt="Timeline navigation arrows" class="timeline__arrow-icon" />
      <h2 class="timeline__title">Timeline</h2>
      <button 
        class="timeline__toggle mobile-only" 
        @click="toggleTimeline"
        :aria-expanded="isExpanded"
        aria-label="Toggle timeline visibility"
      >
        <span v-if="isExpanded">×</span>
        <img v-else src="/images/Icons/clock.svg" alt="" class="timeline__toggle-icon" />
      </button>
    </div>

    <div class="timeline__content">
      <div class="timeline__events" role="list" aria-label="Timeline events">

        <div class="timeline__event" role="listitem" aria-label="Consent form signed at 09:45 AM">
          <div class="timeline__event-icon timeline__event-icon--success" aria-hidden="true">
            <img src="/images/timeline-ico/consent.svg" alt="" />
          </div>
          <div class="timeline__event-content">
            <div class="timeline__event-header">
              <time class="timeline__event-time" datetime="09:45">09:45 AM</time>
            </div>
            <div class="timeline__event-body">
              <p class="timeline__event-title"><strong>Consent form</strong> signed</p>
            </div>
          </div>
        </div>


        <div class="timeline__event" role="listitem" aria-label="3 treatments chosen at 09:45 AM">
          <div class="timeline__event-icon timeline__event-icon--treatments" aria-hidden="true">
            <img src="/images/timeline-ico/treatments.svg" alt="" />
          </div>
          <div class="timeline__event-content">
            <div class="timeline__event-header">
              <time class="timeline__event-time" datetime="09:45">09:45 AM</time>
            </div>
            <div class="timeline__event-body">
              <p class="timeline__event-title"><strong>3 treatments</strong> chosen</p>
              <ul class="timeline__event-list" aria-label="Selected treatments">
                <li>Root canal</li>
                <li>Dental extraction</li>
                <li>Teeth whitening</li>
              </ul>
            </div>
          </div>
        </div>


        <div class="timeline__event" role="listitem" aria-label="Bundle 2 sent to johnsmith@gmail.com on 3 July at 16:15 PM">
          <div class="timeline__event-icon timeline__event-icon--sent" aria-hidden="true">
            <img src="/images/timeline-ico/bundle-sent.svg" alt="" />
          </div>
          <div class="timeline__event-content">
            <div class="timeline__event-header">
              <time class="timeline__event-time" datetime="2024-07-03T16:15">3 July, 16:15 PM</time>
            </div>
            <div class="timeline__event-body">
              <p class="timeline__event-title"><strong><span class="underline">Bundle 2</span></strong> sent</p>
              <p class="timeline__event-email" aria-label="Email address">johnsmith@gmail.com</p>
            </div>
          </div>
        </div>


        <div class="timeline__event" role="listitem" aria-label="Consent form declined on 3 July at 12:54 PM">
          <div class="timeline__event-icon timeline__event-icon--error" aria-hidden="true">
            <img src="/images/timeline-ico/consent-declined.svg" alt="" />
          </div>
          <div class="timeline__event-content">
            <div class="timeline__event-header">
              <time class="timeline__event-time" datetime="2024-07-03T12:54">3 July, 12:54 PM</time>
            </div>
            <div class="timeline__event-body">
              <p class="timeline__event-title"><strong><span class="underline">Consent form</span></strong> declined</p>
            </div>
          </div>
        </div>


        <div class="timeline__event" role="listitem" aria-label="Bundle 1 viewed on 3 July at 12:54 PM">
          <div class="timeline__event-icon timeline__event-icon--viewed" aria-hidden="true">
            <img src="/images/timeline-ico/bundle-viewed.svg" alt="" />
          </div>
          <div class="timeline__event-content">
            <div class="timeline__event-header">
              <time class="timeline__event-time" datetime="2024-07-03T12:54">3 July, 12:54 PM AM</time>
            </div>
            <div class="timeline__event-body">
              <p class="timeline__event-title"><strong><span class="underline">Bundle 1</span></strong> viewed</p>
            </div>
          </div>
        </div>


        <div class="timeline__event" role="listitem" aria-label="Bundle 1 sent to johnsmith@gmail.com on 1 July at 10:05 AM">
          <div class="timeline__event-icon timeline__event-icon--sent" aria-hidden="true">
            <img src="/images/timeline-ico/bundle-sent.svg" alt="" />
          </div>
          <div class="timeline__event-content">
            <div class="timeline__event-header">
              <time class="timeline__event-time" datetime="2024-07-01T10:05">1 July, 10:05 AM</time>
            </div>
            <div class="timeline__event-body">
              <p class="timeline__event-title"><strong><span class="underline">Bundle 1</span></strong> sent</p>
              <p class="timeline__event-email" aria-label="Email address">johnsmith@gmail.com</p>
            </div>
          </div>
        </div>


        <div class="timeline__divider" role="separator" aria-label="Appointment milestone separator"></div>

        <p class="timeline__divider-text" aria-label="Appointment ends on 1 July at 10:00 AM">Appointment ends • 1 July, 10:00 AM</p>


        <div class="timeline__event" role="listitem" aria-label="Annotation added at 09:45 AM">
          <div class="timeline__event-icon timeline__event-icon--annotation" aria-hidden="true">
            <img src="/images/timeline-ico/annotation.svg" alt="" />
          </div>
          <div class="timeline__event-content">
            <div class="timeline__event-header">
              <time class="timeline__event-time" datetime="09:45">09:45 AM</time>
            </div>
            <div class="timeline__event-body">
              <p class="timeline__event-title">Annotation added</p>
            </div>
          </div>
        </div>


        <div class="timeline__event" role="listitem" aria-label="Periodontitis video played at 09:45 AM, 70% complete">
          <div class="timeline__event-video" aria-hidden="true">
            <img src="/images/timeline-ico/video.png" alt="" class="timeline__video-thumbnail" />
          </div>
          <div class="timeline__event-content">
            <div class="timeline__event-header">
              <time class="timeline__event-time" datetime="09:45">09:45 AM</time>
            </div>
            <div class="timeline__event-body">
              <p class="timeline__event-title"><strong><span class="underline">Periodontitis video </span></strong> played</p>
              <p class="timeline__event-subtitle" aria-label="Video completion percentage">70% complete</p>
            </div>
          </div>
        </div>


        <div class="timeline__event" role="listitem" aria-label="Periodontitis selected at 09:45 AM">
          <div class="timeline__event-icon timeline__event-icon--selected" aria-hidden="true">
            <img src="/images/timeline-ico/selected.svg" alt="" />
          </div>
          <div class="timeline__event-content">
            <div class="timeline__event-header">
              <time class="timeline__event-time" datetime="09:45">09:45 AM</time>
            </div>
            <div class="timeline__event-body">
              <p class="timeline__event-title">Periodontitis selected</p>
            </div>
          </div>
        </div>


        <div class="timeline__event" role="listitem" aria-label="Periodontitis mentioned at 09:45 AM">
          <div class="timeline__event-icon timeline__event-icon--mentioned" aria-hidden="true">
            <img src="/images/timeline-ico/pero-mentioned.svg" alt="" />
          </div>
          <div class="timeline__event-content">
            <div class="timeline__event-header">
              <time class="timeline__event-time" datetime="09:45">09:45 AM</time>
            </div>
            <div class="timeline__event-body">
              <p class="timeline__event-title">Periodontitis mentioned</p>
            </div>
          </div>
        </div>



          <p class="timeline__divider-text" aria-label="Appointment begins on 1 July at 09:45 AM">Appointment begins • 1 July, 09:45 AM</p>

      </div>
    </div>
  </aside>


  <div 
    v-if="isExpanded"
    class="timeline__overlay mobile-only"
    @click="toggleTimeline"
    aria-hidden="true"
  ></div>


  <button 
    v-if="!isExpanded"
    class="timeline__floating-toggle mobile-only"
    @click="toggleTimeline"
    aria-label="Open timeline"
  >
    <img src="/images/Icons/clock.svg" alt="" class="timeline__floating-icon" />
  </button>
</template>

<script setup>

const isExpanded = ref(false)

const toggleTimeline = () => {
  isExpanded.value = !isExpanded.value
}


const handleResize = () => {
  if (window.innerWidth >= 1199) {
    isExpanded.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>

.underline {
  text-decoration: underline;
}

.timeline__divider {
  border-top: 1px dashed #9E9E9E;
  width: 100%;
  height: 1px;
}

.timeline {
  width: $timeline-width;
  background-color: $background-white;
  font-family: $font-family-primary;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  
  @media (max-width: 1199px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 400px;
    height: 100vh;
    z-index: 1000;
    border-left: 1px solid $border-light;
    border-top: none;
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
    
    &--expanded {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
  
  &__header {
    padding: 20px 24px;
    border-bottom: 1px solid #E0E0E0;
    background-color: $background-white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    
    @media (max-width: 1199px) {
      justify-content: space-between;
      padding: 16px 20px;
    }
    
    @media (max-width: 768px) {
      padding: 16px 20px;
    }
    
    @media (max-width: 480px) {
      padding: 12px 16px;
    }
  }
  
  &__arrow-icon {
    width: 44px;
    height: 44px;
    position: absolute;
    left: 8px;
    
    @media (max-width: 1199px) {
      display: none;
    }
    
    @media (max-width: 768px) {
      width: 44px;
      height: 44px;
    }
  }
  
  &__title {
    font-size: 18px;
    font-weight: 600;
    color: $text-primary;
    margin: 0;
    text-align: center;
    
    @media (max-width: 1199px) {
      text-align: left;
      flex: 1;
    }
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  
  &__toggle {
    background: none;
    border: none;
    color: $text-primary;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: $transition-base;
    font-size: 18px;
    font-weight: normal;
    
    &:hover {
      background-color: $background-light;
    }
    
    &-icon {
      width: 20px;
      height: 20px;
    }
  }
  
    &__floating-toggle {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
    background-color: $primary-green;
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: $box-shadow-lg;
    transition: $transition-base;
    z-index: 999;
    font-size: 20px;
    font-weight: normal;
    
    &:hover {
      background-color: #345551;
    }
    
    @media (max-width: 768px) {
      bottom: 20px;
      right: 20px;
      width: 48px;
      height: 48px;
      font-size: 18px;
    }
  }
  
  &__floating-icon {
    width: 24px;
    height: 24px;
    filter: brightness(0) invert(1);
    
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
   
   &__overlay {
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: rgba(0, 0, 0, 0.5);
     z-index: 999;
   }
   
   &__content {
    flex: 1;
    overflow-y: auto;
    padding: 24px;
   
    
    @media (max-width: 768px) {
      padding: 20px;
    }
    
    @media (max-width: 480px) {
      padding: 16px;
    }
  }
  
  &__events {
    display: flex;
    flex-direction: column;
    gap: 24px 16px;
  }
  
  &__event {
    display: flex;
    gap: 12px;
    position: relative;
  }
  
  &__event-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    
    img {
      width: 40px;
      height: 40px;
    }
  }
  
  &__event-video {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }
  
  &__video-thumbnail {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  &__event-content {
    flex: 1;
    min-width: 0;
    padding-top: 0;
  }
  
  &__event-header {
    margin-bottom: 0px;
  }
  
  &__event-time {
    font-size: 12px;
    color: #9E9E9E;
    font-weight: 400;
    line-height: normal;
    display: flex;
  }
  
  &__event-body {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  &__event-title {
    font-size: 14px;
    font-weight: 400;
    color: #212121;
    margin: 0;
    line-height: 1.4;
    
    strong {
      font-weight: 600;
    }
  }
  
  &__event-subtitle {
    font-size: 12px;
    color: #94a3b8;
    margin: 0;
    line-height: 1.3;
  }
  
  &__event-email {
    font-size: 12px;
    margin: 0;
    line-height: 1.3;
    color: #636262;
  }
  
  &__event-list {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #64748b;
    line-height: 1.4;
    margin-top: 0;
    
    li {
      margin: 0;
      padding: 0;
    }
  }
  
  &__divider {
    display: flex;
    align-items: center;
    margin:0;
    position: relative;
    
    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, transparent, $border-color, $border-color, transparent);
    }
    
    &-text {
      padding: 0;
      font-size: 14px;
      color: $text-muted;
      background-color: $background-white;
      white-space: nowrap;
      font-weight: 500;
    }
  }
}



@media (max-width: 1024px) {
  .timeline {
    border-left: none;
    border-top: 1px solid $border-light;
  }
}

@media (max-width: 768px) {
  .timeline {
    &__header {
      padding: 16px 20px;
    }
    
    &__content {
      padding: 20px;
    }
    
    &__events {
      gap: 16px;
    }
    
    &__event {
      gap: 10px;
    }
    
    &__event-icon {
      width: 28px;
      height: 28px;
      margin-right: 16px;
      
      svg {
        width: 14px;
        height: 14px;
      }
    }
  }
}


.mobile-only {
  display: none;
  
  @media (max-width: 1199px) {
    display: block;
  }
}
</style> 