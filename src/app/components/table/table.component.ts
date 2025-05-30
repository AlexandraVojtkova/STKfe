import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './table.component.html',
  standalone: true,
  styleUrl: './table.component.css'
})
export class TableComponent<T extends Record<string, any>> {

  @Input() data: T[] = [];

  filters: Partial<Record<keyof T, string | number>> = {};
  pageSize = 5;
  currentPage = 1;

  get keys(): (keyof T)[] {
    return this.data.length ? (Object.keys(this.data[0]) as (keyof T)[]) : [];
  }

  get filteredData(): T[] {
    return this.data.filter(item =>
      Object.entries(this.filters).every(([key, value]) => {
        if (!value && value !== 0) return true;
        const itemValue = String(item[key as keyof T] ?? '').toLowerCase();
        return itemValue.includes(String(value).toLowerCase());
      })
    );
  }

  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  get paginatedData(): T[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredData.slice(start, start + this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  protected readonly Object = Object;
}
