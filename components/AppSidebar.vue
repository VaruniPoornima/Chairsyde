<template>
  <aside class="sidebar" :class="{ 'sidebar--open': isMobileMenuOpen }" role="navigation" aria-label="Main navigation">
    <div class="sidebar__header">
      <div class="sidebar__logo">
        <img src="/images/Logo.svg" alt="Chairside application logo" class="sidebar__logo-image" />
      </div>
      <button 
        class="sidebar__close-btn mobile-only"
        @click="toggleMobileMenu"
        aria-label="Close navigation menu"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    
    <nav class="sidebar__nav" aria-label="Main navigation menu">
      <ul class="sidebar__menu" role="list">
        <li class="sidebar__item">
          <NuxtLink to="/" class="sidebar__link" aria-label="Navigate to home page">
            <img src="/images/Icons/Home.svg" alt="" class="sidebar__icon" aria-hidden="true" />
            <span>Home</span>
          </NuxtLink>
        </li>
        <li class="sidebar__item">
          <a href="#" class="sidebar__link sidebar__link--has-chevron" aria-label="View sessions menu">
            <div class="sidebar__link-content">
              <img src="/images/Icons/session.svg" alt="" class="sidebar__icon" aria-hidden="true" />
              <span>View sessions</span>
            </div>
            <img src="/images/Icons/chevron-right-small.svg" class="sidebar__chevron" aria-hidden="true" alt="" />
          </a>
        </li>
        <li class="sidebar__item">
          <NuxtLink to="/" class="sidebar__link sidebar__link--active" aria-label="Navigate to patient records page" aria-current="page">
            <img src="/images/Icons/User-circle.svg" alt="" class="sidebar__icon" aria-hidden="true" />
            <span>Patient records</span>
          </NuxtLink>
        </li>
        <li class="sidebar__item">
          <a href="#" class="sidebar__link" aria-label="Navigate to media section">
            <img src="/images/Icons/Portfolio.svg" alt="" class="sidebar__icon" aria-hidden="true" />
            <span>Media</span>
          </a>
        </li>
        <li class="sidebar__item">
          <a href="#" class="sidebar__link" aria-label="Navigate to virtual consultation">
            <img src="/images/Icons/consultation.svg" alt="" class="sidebar__icon" aria-hidden="true" />
            <span>Virtual consultation</span>
          </a>
        </li>
        <li class="sidebar__item">
          <a href="#" class="sidebar__link" aria-label="Navigate to statistics page">
            <img src="/images/Icons/Statistics.svg" alt="" class="sidebar__icon" aria-hidden="true" />
            <span>Statistics</span>
          </a>
        </li>
      </ul>
    </nav>
    
    <div class="sidebar__footer">
      <div class="sidebar__user" aria-label="User profile menu - Robert Lindley">
        <div class="sidebar__user-avatar" aria-hidden="true">
          <span class="sidebar__user-initial">RL</span>
        </div>
        <div class="sidebar__user-info">
          <p class="sidebar__user-name">Robert Lindley</p>
          <p class="sidebar__user-email">robertlindley@sno...</p>
        </div>
        <img src="/images/Icons/chevron-right-small.svg" class="sidebar__user-chevron" aria-hidden="true" alt="" />
      </div>
    </div>
  </aside>
  

  <div 
    v-if="isMobileMenuOpen" 
    class="sidebar__overlay mobile-only"
    @click="toggleMobileMenu"
    aria-hidden="true"
  ></div>
  

</template>

<script setup>

const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu()


const route = useRoute()
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: $sidebar-width;
  height: 100vh;
  background-color: $primary-green;
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  overflow-y: hidden;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.3s ease-in-out;
  font-family: $font-family-primary;
  
  @media (max-width: 1024px) {
    transform: translateX(-100%);
    
    &--open {
      transform: translateX(0);
    }
  }
  
  &__header {
    padding: 23px 20px ;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  &__logo {
    display: flex;
    align-items: center;
  }
  
  &__title {
    font-size: 18px;
    font-weight: 700;
    color: white;
    letter-spacing: 0.02em;
    margin: 0;
  }
  
  &__close-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: $transition-base;
    font-size: 20px;
    font-weight: normal;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  
  &__nav {
    flex: 1;
    padding: 32px 0 0 0;
  }
  
  &__menu {
    list-style: none;
    margin: 0;
    padding: 0 8px;
  }
  
  &__item {
    margin: 0 0 4px 0;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  &__link {
    display: flex;
    align-items: center;
    padding: 8px;
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    transition: $transition-base;
    position: relative;
    border-radius: 8px;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.08);
    }
    
    &--active {
      background-color: #345551;
      color: white;
      font-weight: 500;
      
      .sidebar__icon {
        filter: brightness(1);
      }
    }
    
    &--has-chevron {
      justify-content: space-between;
    }
  }
  
  &__link-content {
    display: flex;
    align-items: center;
  }
  
  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    flex-shrink: 0;
    filter: brightness(1);
    
    &--media {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
  }
  
  &__chevron {
    width: 16px;
    height: 16px;
    color: white;
    flex-shrink: 0;
    filter: brightness(0) saturate(100%) invert(88%) sepia(6%) saturate(395%) hue-rotate(133deg) brightness(95%) contrast(87%);
  }
  
  &__footer {
    padding: 16px 12px 20px;
  }
  
  &__user {
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    transition: $transition-base;
    border-radius: 8px;
    background-color: #345551;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  
  &__user-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    flex-shrink: 0;
  }
  
  &__user-initial {
    color: #1f2937;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
  }
  
  &__user-info {
    flex: 1;
    min-width: 0;
  }
  
  &__user-name {
    font-size: 12px;
    font-weight: 400;
    color: white;
    margin: 0 0 0px 0;
    line-height: 1.2;
  }
  
  &__user-email {
    font-size: 12px;
    color: #CED6D5;
    margin: 0;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  &__user-chevron {
    width: 16px;
    height: 16px;
    color: #ffffff;
    margin-left: 12px;
    flex-shrink: 0;
    filter: brightness(0) saturate(100%) invert(88%) sepia(6%) saturate(395%) hue-rotate(133deg) brightness(95%) contrast(87%);
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
}




.mobile-only {
  display: none;
  
  @media (max-width: 1024px) {
    display: block;
  }
}

.desktop-only {
  display: block;
  
  @media (max-width: 1024px) {
    display: none;
  }
}
</style> 