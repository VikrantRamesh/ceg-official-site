import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
const EventsPage = () => {
  const [events, setEvents] = useState([]);

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsLargeScreen(mediaQuery.matches);
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/event/all-events/-1`,
          {
            withCredentials: true,
          }
        );
        setEvents(response.data || []);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          navigate("/club/");
        } else {
          console.error("Error fetching events: ", error);
        }
      }
    };

    fetchEvents();
  }, []);

  const handleEventChange = (index, field, value) => {
    const updatedEvents = [...events];
    updatedEvents[index][field] = value;
    setEvents(updatedEvents);
  };

  const addEvent = () =>
    setEvents([
      ...events,
      { id: "", title: "", description: "", link: "", isEditing: true },
    ]);
  const removeEvent = (index) =>
    setEvents(events.filter((_, i) => i !== index));

  const updateEvent = async (index) => {
    const updatedEvents = [...events];
    const eventToUpdate = updatedEvents[index]; // Get the event to be updated

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/event/upsert-event`, 
        {
          id: eventToUpdate.id,
          title: eventToUpdate.title,
          description: eventToUpdate.description,
          link: eventToUpdate.link
        },
        { withCredentials: true }
      );

      console.log('Event updated successfully:', response.data);

      // If the response contains an id, update the event at the specified index
      if (response.data.id) {
        updatedEvents[index].id = response.data.id;
      }

    } catch (error) {
      console.error('Error updating event:', error.response ? error.response.data : error.message);
    }
};


  const deleteEvent = async (index) => {
    const updatedEvents = [...events];
    const eventId = updatedEvents[index].id;
    if (eventId) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/event/delete-event/${eventId}`, // Delete endpoint with event ID
          {
            withCredentials: true, // Include cookies if needed
          }
        );
        console.log('Event deleted successfully:', response.data);
      } catch (error) {
        console.error('Error deleting event:', error.response ? error.response.data : error.message);
      }
    }
  };

  const toggleEditMode = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].isEditing = !updatedEvents[index].isEditing;
    setEvents(updatedEvents);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Manage Updates & Events</h1>

      <form
        className="bg-white shadow-md rounded p-6 space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-4 bg-gray-100 p-4 rounded shadow">
          {events.map((event, index) => (
            <div key={index} className="grid gap-2 grid-cols-12 relative">
              {event.isEditing ? (
                <>
                  {/* Event Description */}
                  <textarea
                    placeholder="Update or Event"
                    value={event.title}
                    onChange={(e) =>
                      handleEventChange(index, "title", e.target.value)
                    }
                    rows="2"
                    className="md:col-span-11 col-span-9 font-normal p-2 border border-gray-300 rounded"
                  ></textarea>

                  {/* check Button */}
                  <button
                    type="button"
                    onClick={() => {
                      toggleEditMode(index);
                      updateEvent(index);
                    }}
                    className="row-span-1 col-span-3 md:col-span-1 flex items-center justify-center text-white bg-emerald-500 hover:bg-green-700 rounded"
                    style={{ height: "100%" }}
                  >
                    <FaCheck className="text-3xl" />
                  </button>
                  {/* Event Link */}
                  <input
                    type="text"
                    placeholder="Event or Update Link"
                    value={event.link}
                    onChange={(e) =>
                      handleEventChange(index, "link", e.target.value)
                    }
                    className="md:col-span-11 col-span-9 font-normal p-2 border border-gray-300 rounded"
                  />

                  {/* Trash Icon */}
                  <button
                    type="button"
                    onClick={() => {
                      removeEvent(index);
                      deleteEvent(index);
                    }}
                    className="row-span-1  col-span-3 md:col-span-1 flex items-center justify-center text-white bg-rose-500 hover:bg-red-900 rounded"
                    style={{ height: "100%" }}
                  >
                    <FaTrash icon="trash" className="text-2xl" />
                  </button>

                  {/* Separator */}
                  {index < events.length - 1 && (
                    <hr className="col-span-12 my-4 border-gray-300" />
                  )}
                </>
              ) : (
                <>
                  {/* Event Description */}
                  <p className="md:col-span-10 font-normal col-span-12 text-lg">
                    {"   "}
                    {event.title}
                  </p>

                  {isLargeScreen ? (
                    <div className="row-span-3 col-span-12 grid-cols-2 grid gap-5 md:col-span-2">
                      <button
                        type="button"
                        onClick={() => {
                          toggleEditMode(index);
                        }}
                        className="col-span-1 justify-center justify-items-center justify-self-stretch text-white bg-blue-500 hover:bg-blue-900 rounded px-auto py-2"
                        style={{ height: "100%" }}
                      >
                        <FaEdit icon="trash" className="text-2xl" />
                      </button>

                      {/* Trash Icon */}
                      <button
                        type="button"
                        onClick={() => {
                          removeEvent(index);
                          deleteEvent(index);
                        }}
                        className="col-span-1  justify-center justify-items-center text-white bg-rose-500 hover:bg-red-900 rounded px-auto py-2"
                        style={{ height: "100%" }}
                      >
                        <FaTrash icon="trash" className="text-2xl" />
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}

                  {/* Event Link */}
                  {event.link ? (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:col-span-10 font-normal col-span-12 text-lg overflow-x-clip"
                    >
                      <span className="font-bold">Link:{"    "}</span>
                      <span className="text-blue-500 underline text-sm md:text-lg">
                        {event.link}
                      </span>
                    </a>
                  ) : (
                    <></>
                  )}

                  {!isLargeScreen ? (
                    <div className="row-span-2 col-span-12 grid-cols-2 grid gap-5 md:col-span-2">
                      <button
                        type="button"
                        onClick={() => {
                          toggleEditMode(index);
                        }}
                        className="col-span-1 justify-center justify-items-center justify-self-stretch text-white bg-blue-500 hover:bg-blue-900 rounded px-auto py-2"
                        style={{ height: "100%" }}
                      >
                        <FaEdit icon="trash" className="text-2xl" />
                      </button>

                      {/* Trash Icon */}
                      <button
                        type="button"
                        onClick={() => {
                          removeEvent(index);
                          deleteEvent(index);
                        }}
                        className="col-span-1  justify-center justify-items-center text-white bg-rose-500 hover:bg-red-900 rounded px-auto py-2"
                        style={{ height: "100%" }}
                      >
                        <FaTrash icon="trash" className="text-2xl" />
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                  {/* Separator */}
                  {index < events.length - 1 && (
                    <hr className="col-span-12 my-4 border-gray-300" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addEvent}
          className="text-blue-500 hover:underline"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventsPage;
