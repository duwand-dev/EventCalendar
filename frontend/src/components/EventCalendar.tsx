import { useState, MouseEvent } from "react"
import { Box, Button, ButtonGroup, Card, CardContent, CardHeader, Container, Divider } from "@mui/material"

import { Calendar, type Event, dateFnsLocalizer } from "react-big-calendar"

import { format } from "date-fns/format"
import { parse } from "date-fns/parse"
import { startOfWeek } from "date-fns/startOfWeek"
import { getDay } from "date-fns/getDay"
import { enUS } from "date-fns/locale/en-US"

import "react-big-calendar/lib/css/react-big-calendar.css"

import EventInfo from "./EventInfo"
import AddEventModal from "./AddEventModal"
import EventInfoModal from "./EventInfoModal"
import { AddTodoModal } from "./AddTodoModal"
import AddDatePickerEventModal from "./AddDatePickerEventModal"

const locales = {
    "en-US": enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

export interface ITodo {
    _id: string
    title: string
    color?: string
}

export interface IEventInfo extends Event {
    _id: string
    description: string
    todoId?: string
}

export interface EventFormData {
    description: string
    todoId?: string
}

export interface DatePickerEventFormData {
    description: string
    todoId?: string
    allDay: boolean
    start?: Date
    end?: Date
}

export const generateId = () => (Math.floor(Math.random() * 10000) + 1).toString()

const initialEventFormState: EventFormData = {
    description: "",
    todoId: undefined,
}

const initialDatePickerEventFormData: DatePickerEventFormData = {
    description: "",
    todoId: undefined,
    allDay: false,
    start: undefined,
    end: undefined,
}