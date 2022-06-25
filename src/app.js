import "./styles.css";
import { ContextMenu } from "./menu";
import {MessageModule} from "@/modules/message.module";
import {ShapeModule} from "@/modules/shape.module";

const runContextMenuApp = new ContextMenu(".menu");

const shapeModule = new ShapeModule();
shapeModule.trigger();

