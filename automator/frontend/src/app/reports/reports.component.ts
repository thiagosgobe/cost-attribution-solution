import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-reports",
  standalone: true,
  imports: [],
  templateUrl: "./reports.component.html",
  styleUrl: "./reports.component.sass",
})
export class ReportsComponent {
  reportType: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.reportType = params.get("reportType");
    });
  }
}
