import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLoaderPipe } from './image-loader.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
    declarations: [ImageLoaderPipe, SafeHtmlPipe],
    imports: [ CommonModule ],
    exports: [ImageLoaderPipe, SafeHtmlPipe],
    providers: [ImageLoaderPipe, SafeHtmlPipe],
})
export class PipesModule {}