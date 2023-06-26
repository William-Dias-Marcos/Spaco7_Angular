import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappConversationComponent } from './whatsapp-conversation.component';

describe('WhatsappConversationComponent', () => {
  let component: WhatsappConversationComponent;
  let fixture: ComponentFixture<WhatsappConversationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappConversationComponent]
    });
    fixture = TestBed.createComponent(WhatsappConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
