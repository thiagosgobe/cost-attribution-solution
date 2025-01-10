/*
   Copyright 2024 Google LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import { MatListModule } from "@angular/material/list";
import { Component, Inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from "@angular/material/dialog";
import { Tag, TagsController } from "../../../model/models";
import { MatButtonModule } from "@angular/material/button";
import { Service } from "../../../model/Service";

@Component({
  selector: "app-manage-tags",
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: "./manage-tags.component.html",
  styleUrl: "./manage-tags.component.sass",
})
export class ManageTagsComponent {
  tags: Tag[] = [];

  constructor(service: Service) {
    service.fetchTags().subscribe((tags) => {
      this.tags = tags;
    });
  }

  formatTagValues(tag: Tag) {
    return tag.values.map((v) => v.value).join(", ");
  }
}
