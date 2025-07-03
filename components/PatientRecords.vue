<template>
  <div class="patient-records">
    <div class="patient-records__main">

      <div class="breadcrumb" role="navigation" aria-label="Breadcrumb navigation">
        <button 
          v-if="!isMobileMenuOpen"
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          aria-label="Open navigation menu"
        >
          <span aria-hidden="true">☰</span>
        </button>
        <div class="breadcrumb__content">
          <a href="#" class="breadcrumb__link">Patient records</a>
          <img src="/images/Icons/chevron-right-small.svg" class="breadcrumb__separator" aria-hidden="true" alt="" />
          <a href="#" class="breadcrumb__link">Sarah Thompson</a>
          <img src="/images/Icons/chevron-right-small.svg" class="breadcrumb__separator" aria-hidden="true" alt="" />
          <span class="breadcrumb__current" aria-current="page">Emergency visit for tooth ache</span>
        </div>
      </div>


      <div class="content">
        <div class="content__header">
          <div class="tabs" role="tablist" aria-label="Patient record sections">
            <button class="tabs__tab tabs__tab--active" role="tab" aria-selected="true" aria-controls="notes-panel" id="notes-tab">Notes</button>
            <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="bundles-panel" id="bundles-tab">Bundles</button>
          </div>
          <button class="edit-session-btn" aria-label="Edit current session">
            <img src="/images/Icons/Edit.svg" alt="" class="edit-session-btn__icon" aria-hidden="true" />
            Edit session
          </button>
        </div>

        <div class="content__body">
          <div class="notes-card" role="tabpanel" id="notes-panel" aria-labelledby="notes-tab">

            <div class="template-bar">
              <div class="template-info">
                <button class="edit-session-btn" aria-label="Select Template A">
                  <img src="/images/Icons/Template.svg" alt="" aria-hidden="true" />
                  Template A
                </button>
              </div>
              <div class="template-actions">
                <button class="template-btn" aria-label="Copy template">
                  <img src="/images/Icons/Copy.svg" alt="" aria-hidden="true" />
                </button>
                <button class="template-btn" aria-label="Download template">
                  <img src="/images/Icons/Download.svg" alt="" aria-hidden="true" />
                </button>
              </div>
            </div>


            <div class="notes-header">
              <h2 class="notes-title">Notes</h2>
              <p class="notes-subtitle">Last updated today 09:15 AM</p>
            </div>


            <div class="form-content">

      
                <div class="form-field">
                  <label class="field-label">Dentist</label>
                  <div class="field-value">Dr John Smith</div>
                  </div>
                  <div class="form-field">

                    <label class="field-label">Nurse</label>
                  <div class="field-value field-value--editable">Type here</div>
                </div>
              


              <div class="form-field form-field--full">
                <label class="field-label">When did the fracture occur?</label>
                <div class="button-options" role="radiogroup" aria-label="Fracture timing options">
                  <button class="option-btn" role="radio" aria-checked="false">Today</button>
                  <button class="option-btn option-btn--selected" role="radio" aria-checked="true">Yesterday</button>
                  <button class="option-btn" role="radio" aria-checked="false">Several days ago</button>
                  <button class="option-btn" role="radio" aria-checked="false">Over a week ago</button>
                  <button class="option-btn" role="radio" aria-checked="false">N/A</button>
                </div>
              </div>


               <div class="form-field form-field--full">
                 <label class="field-label">
                   Location of broken tooth
                 </label>
                 <div class="field-value field-value--highlight">Broken tooth lorem</div>
               </div>


              <div class="form-field form-field--full">
                <label class="field-label">Reason for attendance</label>
                <div class="field-value field-value--highlight">Broken tooth lorem</div>
              </div>


              <div class="form-field form-field--full">
                <label class="field-label">When did the fracture occur?</label>
                <div class="field-value ">Broken tooth</div>
              </div>


              <div class="form-field form-field--full">
                <label class="field-label">How did it happen?</label>
                <div class="field-value">Broken tooth</div>
              </div>


              <div class="form-field form-field--full">
                <label class="field-label">Is the tooth causing pain?</label>
                <div class="field-value">Broken tooth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <AppTimeline />
  </div>
</template>

<script setup>

const { toggleMobileMenu, isMobileMenuOpen } = useMobileMenu()
</script>

<style lang="scss" scoped>
.patient-records {
  display: flex;
  height: 100vh;
  background-color: $background-light;
  font-family: $font-family-primary;
  
  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}

.breadcrumb {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: $background-white;
  font-size: 14px;
  min-height: 56px;
  border-bottom: 1px solid #E0E0E0;
  
  &__content {
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0;
    
    @media (max-width: 768px) {
      white-space: nowrap;
      overflow: hidden;
    }
  }
  
  &__link {
    color: #3A5754;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    flex-shrink: 0;
    
    &:hover {
      color: $text-primary;
    }
    
    @media (max-width: 768px) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 120px;
    }
  }
  
  &__separator {
    width: 16px;
    height: 16px;
    margin: 0 8px;
    color: #999998;
    flex-shrink: 0;
  }
  
  &__current {
    color: #999998;
    font-weight: 400;
    flex: 1;
    min-width: 0;
    
    @media (max-width: 768px) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.mobile-menu-btn {
  background-color: transparent;
  color: $primary-green;
  border: none;
  border-radius: 8px;
  padding: 2px 12px;
  cursor: pointer;
  transition: $transition-base;
  font-size: 32px;
  font-weight: normal;
      display: none;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  height: 32px;
  
  
  @media (max-width: 1023px) {
    display: flex;
  }
 
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  &__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 8px 0 24px;
    background-color: $background-white;
    border-bottom: 1px solid #D9D8D8;
    min-height: 60px;
    border-right: 1px solid #E0E0E0;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
      padding: 16px;
      gap: 16px;
      min-height: auto;
    }
  }
  
  &__body {
    flex: 1;
    overflow-y: auto;
    padding: 24px;
   background-color:#F7F5F5;
  }
}

.tabs {
  display: flex;
  gap: 0;
  
  @media (max-width: 768px) {
    order: 1;
  }
  
  &__tab {
    padding: 16px 0 12px 0;
    margin-right: 16px;
    border: none;
    background: none;
    color: #212121;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: $transition-base;
    position: relative;
    
    &:hover {
      color: $text-primary;
    }
    
    &--active {
      color: #2E7D76;
      border-bottom-color: #2E7D76;
    }
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
}

.edit-session-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  margin-bottom: 8px;
  border: 1px solid #D9D8D8;
  background-color: $background-white;
  color: #0A332F;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: $transition-base;
  
  &:hover {
    background-color: $background-light;
    border-color: $text-muted;
  }
  
  &__icon {
    width: 22px;
    height: 22px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
    order: -1;
    justify-content: center;
  }
}

.notes-card {
  background-color: $background-white;
  border-radius: 8px;
  padding: 48px 40px;
  overflow: hidden;
  @media (max-width: 991px) {
    padding: 32px;
  }
}

.template-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  background-color: $background-white;

  .edit-session-btn{
    padding: 10px 12px;
    margin-bottom: 0px;
    height: 34px;
  }
}

.template-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.template-icon {
  width: 16px;
  height: 16px;
  color: #6b7280;
}

.template-title {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.template-actions {
  display: flex;
  gap: 8px;
}

.template-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }
  
  svg {
    width: 14px;
    height: 14px;
    color: #6b7280;
  }
}

.notes-header {

  border-bottom: 1px solid #D9D8D8;
  padding-bottom: 24px;
  margin-bottom: 24px;
}

.notes-title {
  font-size: 25px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
  line-height: 1.2;
}

.notes-subtitle {
  font-size: 12px;
  color: #999998;
  margin: 0;
  font-weight: 400;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
}

.form-field {
  &--full {
    grid-column: 1 / -1;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.field-label {
  font-size: 16px;
  font-weight: 700;
  color: #212121; 
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 2px;
}

.info-icon {
  width: 14px;
  height: 14px;
  color: #9ca3af;
}

.field-value {
  font-size: 16px;
  color: #202020;
  line-height: 1.5;
  font-weight: 400;
  padding-bottom: 2px;
  &--highlight{
    border-bottom: 2px solid #A9F2E6;
    display: inline-block;
    padding-bottom: 4px;
    position: relative;
    overflow: visible;
    &:hover {
      background-color: #E5FBF8;
      &::after{
        content: '';
        display: block;
        width: 40px;
        height: 40px;
        background-image: url('/images/info.svg');
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 100;
        position: absolute;
        top: -32px;
    right: -32px;
      }
    }
  }


  
  &--editable {
    color: #999998;
    border-bottom: 2px solid #FC5E64;
    padding-bottom: 1px;
    display: inline-block;
  }
}

.button-options {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.option-btn {
  padding: 6px 8px;
  border: 1px solid #d1d5db;
  background-color: white;
  color: #0A332F;
  font-size: 14px;
  font-weight: 400;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }
  
  &--selected {
    background-color: #E5FBF8;
    color:#012925;
    border: 0px;
    
    &:hover {
      background-color: #E5FBF8;
      border-color: #216963;
    }
  }
}

@media (max-width: 1199px) {
  .patient-records {
    &__main {
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .breadcrumb {
    padding: 12px 16px;
    font-size: 14px;
  }
  
  .content__header {
    padding: 16px;
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
    min-height: auto;
    padding-bottom: 0px;
  }
  
  .content__body {
    padding: 16px;
  }
  
  .form-content {

  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 24px;
  }
  
  .button-options {
    flex-direction: column;
  }
  
  .tabs__tab {
    margin-right: 16px;
  }
}
</style> 