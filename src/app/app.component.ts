import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Tarea } from './tarea';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	tareas: Tarea[];
	nuevaTarea = this.formBuilder.group(new Tarea(0,"",0));

	constructor(
		public service: AppService,
		private formBuilder: FormBuilder,
	) { }

	ngOnInit() {
		this.obtenerTareas();
	}

	async obtenerTareas() {
		this.tareas = await this.service.obtenerTareas();
	}

	onSubmit(): void {
		this.tareas.push(this.nuevaTarea.value)
		this.nuevaTarea.reset();
	}
}
