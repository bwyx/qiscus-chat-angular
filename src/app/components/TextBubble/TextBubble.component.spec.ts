import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBubbleComponent } from './TextBubble.component';

describe('TextBubbleComponent', () => {
  let component: TextBubbleComponent;
  let fixture: ComponentFixture<TextBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextBubbleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render replied-comment if type is 'reply'", () => {
    component.type = 'reply';
    component.payload = {
      replied_comment_type: 'text',
      replied_comment_message: 'Hello World',
    };

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.replied-comment').textContent).toContain(
      'Hello World'
    );
  });

  it('should render image if type is "file_attachment"', () => {
    component.type = 'file_attachment';
    component.payload = {
      url: 'https://example.com/image.png',
    };

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toContain(
      'https://example.com/image.png'
    );
  });

  it('rendered image should have an "alt" attribute', () => {
    component.type = 'file_attachment';
    component.payload = {
      url: 'https://example.com/image.png',
    };

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').alt).toBeTruthy();
  });

  // TODO: check file mimetype, and render image if it's an image, otherwise render link to file
  it(
    'should render link to file if type is "file_attachment" and is not and image'
  );

  it('should render comment text if type is "text"', () => {
    component.type = 'text';
    component.text = 'Hello World';

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'Hello World'
    );
  });

  it('should render message status if is not received', () => {
    component.received = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.message-meta span')).toBeTruthy();
  });

  it('should not render message status if is received', () => {
    component.received = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.message-meta span')).toBeFalsy();
  });
});
