import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Branch } from '../branch.model';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [BranchService]
})
export class TreeComponent implements OnInit {
  branches: Branch[];
  branchToDisplay: Branch;
  branchId: number;
  pathOneId: string;
  pathTwoId: string;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private branchService: BranchService) { }

  ngOnInit() {
    this.route.params.forEach((urlParamatersArray) => {
      this.branchId = parseInt(urlParamatersArray['id']);
      this.branchToDisplay = this.branchService.getBranchById(this.branchId);
      this.pathOneId = this.branchToDisplay.id + this.branchToDisplay.choiceOne;
      this.pathTwoId = this.branchToDisplay.id + this.branchToDisplay.choiceTwo;
    });
  }

  goToDetailPage(targetId: string) {
   this.router.navigate(['branches', targetId]);
 }

}
