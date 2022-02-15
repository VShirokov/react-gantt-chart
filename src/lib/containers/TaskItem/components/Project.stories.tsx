// *** NPM ***
import React from "react";

// *** OTHER ***
import Project, { IProps as IProjectProps } from "./Project";

export default {
	title: "TaskItem/Project",
	component: Project,
};

// *** CONSTANTS ***
const TASK: IProjectProps["task"] = {
	index: 1,
	typeInternal: "task",
	x1: 0,
	x2: 200,
	y: 0,
	height: 50,
	progressX: 0,
	progressWidth: 100,
	barCornerRadius: 5,
	handleWidth: 10,
	barChildren: [],
	styles: {
		backgroundColor: "black",
		backgroundSelectedColor: "yellow",
		progressColor: "green",
		progressSelectedColor: "orange",
	},
	id: "1",
	name: "Test",
	start: new Date(2021, 10, 21),
	end: new Date(2021, 10, 20),
	progress: 50,
	type: "task",
	dependencies: [],
	hideChildren: true,
	isDisabled: false,
	project: undefined,
};

export const Simple = () => {
	return <Project task={TASK} isSelected={true} />;
};