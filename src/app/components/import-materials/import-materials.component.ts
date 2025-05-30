import {Component, inject} from '@angular/core';
import {TechnicianService} from '../../../services/technician.service';

@Component({
  selector: 'app-import-materials',
  imports: [],
  templateUrl: './import-materials.component.html',
  standalone: true,
  styleUrl: './import-materials.component.css'
})
export class ImportMaterialsComponent {

  private readonly service = inject(TechnicianService)

  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUploadEk(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.service.uploadEkFile(formData).subscribe({
      next: res => console.log('Upload success', res),
      error: err => console.error('Upload failed', err)
    });
  }
  onUploadTk(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.service.uploadTkFile(formData).subscribe({
      next: res => console.log('Upload success', res),
      error: err => console.error('Upload failed', err)
    });
  }
  onUploadKo(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.service.uploadKoFile(formData).subscribe({
      next: res => console.log('Upload success', res),
      error: err => console.error('Upload failed', err)
    });
  }
}
