import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @ViewChild('slider', { static: true }) slider!: ElementRef;
  currentIndex: number = 0;
  images: string[] = [
    'https://lamarzocco.com/it/wp-content/uploads/2023/09/X_2-gr-Back.png',
    'https://lamarzocco.com/it/wp-content/uploads/2023/09/X_2-gr-Back.png',
    'https://lamarzocco.com/it/wp-content/uploads/2023/09/X_2-gr-Back.png'
  ];
  autoPlayInterval: any;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    // Check if running on the browser
    if (isPlatformBrowser(this.platformId)) {
      // Initialize Typed.js only in the browser
      const typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50
      });

      // Start the auto-play for the slider
      this.startAutoPlay();
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;  // Loop back to the first image
    }
    this.updateSliderPosition();
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;  // Loop back to the last image
    }
    this.updateSliderPosition();
  }

  updateSliderPosition(): void {
    const offset = -this.currentIndex * 100;
    this.renderer.setStyle(this.slider.nativeElement, 'transform', `translateX(${offset}%)`);
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);  // Change slide every 3 seconds
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();  // Clear interval when the component is destroyed
  }
}
