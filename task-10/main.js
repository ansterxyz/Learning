const saveData = () => {
	let title = document.querySelector('#eventTitle').value
	let date = document.querySelector('#eventDate').value
	let startTime = document.querySelector('#eventStartTime').value
	let endTime = document.querySelector('#eventEndTime').value
	let description = document.querySelector('#eventDescription').value

	let calendar = {
		title: title,
		date: date,
		startTime: startTime,
		endTime: endTime,
		description: description,
	}

	let storedEvents = JSON.parse(localStorage.getItem('events')) || []
	storedEvents.push(calendar)
	localStorage.setItem('events', JSON.stringify(storedEvents))

	getData()
}

const getData = () => {
	let storedEvents = JSON.parse(localStorage.getItem('events')) || []
	let eventList = document.querySelector('#eventList')
	eventList.innerHTML = ''

	if (storedEvents.length > 0) {
		storedEvents.forEach((event, index) => {
			eventList.innerHTML += `<li>${event.title} - ${event.date} (${event.startTime} - ${event.endTime})</li>`
			eventList.innerHTML += `<li>${event.description}</li>`
			eventList.innerHTML += `<hr><br>`
		})
	} else {
		eventList.innerHTML += '<li>События не найдены</li>'
	}
}

const deleteData = index => {
	let storedEvents = JSON.parse(localStorage.getItem('events')) || []
	storedEvents.splice(index, 1)
	localStorage.setItem('events', JSON.stringify(storedEvents))
	getData()
}

window.onload = () => {
	getData()
}
