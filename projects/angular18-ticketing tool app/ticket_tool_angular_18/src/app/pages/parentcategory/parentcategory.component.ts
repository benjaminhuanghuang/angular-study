import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parentcategory',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parentcategory.component.html',
  styleUrl: './parentcategory.component.css'
})
export class ParentcategoryComponent {
  masterSrc = inject(MasterService);

  gridList: any[] = [];
  deptList: any[] = [];

  newObj: any = {
    "categoryId": 0,
    "categoryName": "",
    "deptId": 0
  }

  ngOnInit(): void {
    this.getGridData();
    this.getAllDept();
  }

  getAllDept() {
    this.masterSrc.getAllDept().subscribe((res: any) => {
      this.deptList = res.data;
    })
  }

  getGridData() {
    this.masterSrc.getAllpCategory().subscribe((res: any) => {
      this.gridList = res.data;
    })
  }

  save() {
    this.masterSrc.createpCategory(this.newObj).subscribe((res: any) => {
      if (res.result) {
        alert("Parent Category Created Success");
        this.getGridData();
      } else {
        alert(res.message)
      }
    })
  }
  onEdit(data: any) {
    this.newObj = data;
  }
  update() {
    this.masterSrc.updatepCategory(this.newObj).subscribe((res: any) => {
      if (res.result) {
        alert("Parent Category Updated Success");
        this.getGridData();
      } else {
        alert(res.message)
      }
    })
  }
  onDelete(id: number) {
    const isDelete = confirm("Are you sure want Delete");
    if (isDelete) {
      this.masterSrc.deletepCategoryById(id).subscribe((res: any) => {
        if (res.result) {
          alert("Parent Category Deleted Success");
          this.getGridData();
        } else {
          alert(res.message)
        }
      })
    }
  }
}
