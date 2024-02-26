import React, { useState, useEffect } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {

  const [profile, setProfile] = useState('');
  const [tasks, setTasks] = useState('');
  const [notifications, setNotifications] = useState({});
  const [notificationsCount, setNotificationsCount] = useState(0);
  const [activeButton, setActiveButton] = useState(1);

  const apiKey = import.meta.env.VITE_API_KEY;

  const handleClick = (id) => {
    setActiveButton(id);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await fetch('https://d473b897-ef30-4a6b-bbde-58e8ef1a8bd2.mock.pstmn.io/user/info', {
          headers: {
            'x-api-key': `${apiKey}`,
            'Content-Type': 'application/json',
          },
        });
        const profileData = await profileResponse.json();
        setProfile(profileData.profile_data);

        const tasksResponse = await fetch('https://d473b897-ef30-4a6b-bbde-58e8ef1a8bd2.mock.pstmn.io/user/tasks', {
          headers: {
            'x-api-key': `${apiKey}`,
            'Content-Type': 'application/json',
          },
        });
        const tasksData = await tasksResponse.json();
        console.log("tasks", tasksData.tasks)
        setTasks(tasksData.tasks);

        const notifResponse = await fetch('https://d473b897-ef30-4a6b-bbde-58e8ef1a8bd2.mock.pstmn.io/notifications', {
          headers: {
            'x-api-key': `${apiKey}`,
            'Content-Type': 'application/json',
          },
        });
        const notificationsData = await notifResponse.json();
        setNotifications(notificationsData.notifications);
        setNotificationsCount(Object.keys(notificationsData.notifications).length);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className='app'>
        <div className='side-menu'>
          <img className='logo' src={logo} />
          <div className='navbar'>
            <p><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#555d5e" fill-rule="evenodd" clip-rule="evenodd"> <path d="M1 2.25C1 1.56 1.56 1 2.25 1h3.5C6.44 1 7 1.56 7 2.25v11.5C7 14.44 6.44 15 5.75 15h-3.5C1.56 15 1 14.44 1 13.75V2.25zm1.5.25v11h3v-11h-3zM9 2.25C9 1.56 9.56 1 10.25 1h3.5c.69 0 1.25.56 1.25 1.25v3.5C15 6.44 14.44 7 13.75 7h-3.5C9.56 7 9 6.44 9 5.75v-3.5zm1.5.25v3h3v-3h-3zM10.25 9C9.56 9 9 9.56 9 10.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5C15 9.56 14.44 9 13.75 9h-3.5zm.25 4.5v-3h3v3h-3z"></path> </g> </g></svg>Dashboard</p>
            <p><svg viewBox="0 0 91 91" enable-background="new 0 0 91 91" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#555D5E" stroke="#555D5E" stroke-width="1.8199999999999998"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M29.889,57.763V13.068c-16.519,4.636-28.67,19.82-28.67,37.796c0,21.648,17.613,39.262,39.264,39.262 c18.031,0,33.253-12.227,37.836-28.823h-44.89C31.472,61.303,29.889,59.719,29.889,57.763z" fill="#ffffff"></path> <path d="M77.232,48.36H42.988V14.11c0-1.385-1.123-2.506-2.506-2.506c-3.671,0-7.221,0.517-10.594,1.464v44.694 c0,1.956,1.583,3.54,3.54,3.54h44.89c0.919-3.326,1.42-6.824,1.42-10.438C79.738,49.481,78.615,48.36,77.232,48.36z" fill="#ffffff45596B"></path> </g> <path d="M86.852,54.204H40.395c-1.799,0-3.256-1.457-3.256-3.257V4.489c0-1.797,1.457-3.256,3.256-3.256 c27.413,0,49.713,22.303,49.713,49.715C90.108,52.747,88.649,54.204,86.852,54.204z" fill="#ffffffEC4A7"></path> </g> </g></svg>Projects</p>
            <p className={activeButton === 1 ? 'active' : ''} onClick={() => handleClick(1)}><svg className={activeButton === 2 ? 'fill' : ''} fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M369.44,0H141.889C97.971,0,62.578,36.182,62.578,80.108v352.675c0,43.927,35.393,79.217,79.311,79.217H369.44 c43.917,0,79.982-35.29,79.982-79.217V80.108C449.422,36.182,413.357,0,369.44,0z M426.667,432.783 c0,31.379-25.857,56.461-57.227,56.461H141.889c-31.371,0-56.556-25.082-56.556-56.461V80.108 c0-31.379,25.185-57.353,56.556-57.353H369.44c31.37,0,57.227,25.973,57.227,57.353V432.783z"></path> </g> </g> <g> <g> <rect x="153.6" y="56.889" width="204.8" height="22.756"></rect> </g> </g> <g> <g> <path d="M153.6,170.667h-11.378c-6.283,0-11.378,5.094-11.378,11.378V204.8c0,6.283,5.094,11.378,11.378,11.378H153.6 c6.283,0,11.378-5.094,11.378-11.378v-22.756C164.978,175.761,159.883,170.667,153.6,170.667z"></path> </g> </g> <g> <g> <path d="M153.6,273.067h-11.378c-6.283,0-11.378,5.094-11.378,11.378V307.2c0,6.283,5.094,11.378,11.378,11.378H153.6 c6.283,0,11.378-5.094,11.378-11.378v-22.756C164.978,278.161,159.883,273.067,153.6,273.067z"></path> </g> </g> <g> <g> <path d="M153.6,375.467h-11.378c-6.283,0-11.378,5.094-11.378,11.378V409.6c0,6.283,5.094,11.378,11.378,11.378H153.6 c6.283,0,11.378-5.094,11.378-11.378v-22.756C164.978,380.561,159.883,375.467,153.6,375.467z"></path> </g> </g> <g> <g> <rect x="199.111" y="182.044" width="182.044" height="22.756"></rect> </g> </g> <g> <g> <rect x="199.111" y="284.444" width="182.044" height="22.756"></rect> </g> </g> <g> <g> <rect x="199.111" y="386.844" width="182.044" height="22.756"></rect> </g> </g> </g></svg>Task list</p>
            <p><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 7V7C14 6.06812 14 5.60218 13.8478 5.23463C13.6448 4.74458 13.2554 4.35523 12.7654 4.15224C12.3978 4 11.9319 4 11 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V11C4 11.9319 4 12.3978 4.15224 12.7654C4.35523 13.2554 4.74458 13.6448 5.23463 13.8478C5.60218 14 6.06812 14 7 14V14" stroke="#555d5e"></path> <rect x="10" y="10" width="10" height="10" rx="2" stroke="#555d5e"></rect> </g></svg> Services</p>
            <p className={activeButton === 2 ? 'active' : ''} onClick={() => handleClick(2)}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z" stroke="#555d5e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" className={activeButton === 2 ? 'fill1' : ''}></path> <path className={activeButton === 2 ? 'fill1' : ''} d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke="#555d5e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path className={activeButton === 2 ? 'fill1' : ''} opacity="0.4" d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601" stroke="#555d5e" stroke-width="1.5" stroke-miterlimit="10"></path> </g></svg> Notifications <h5>{notificationsCount}</h5></p>
            <p><svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#555D5E" d="M14 14.2c0 0 0 0 0 0 0-0.6 2-1.8 2-3.1 0-1.5-1.4-2.7-3.1-3.2 0.7-0.8 1.1-1.7 1.1-2.8 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.6 0 2.9-0.5 3.7-1.1 0 0.1 0 0.1 0 0.2 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0.1-0.1-0.7-0.5-0.7-1.9zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path> </g></svg>Chat</p>
          </div>
          <div className='profile'>
            <img src={profile.profile_pic}></img>
            <h2>{profile.name}</h2>
            <p>{profile.user_id}</p>
          </div>
        </div>
        <div className='main-menu'>
          <div className='header'>
            <div className="header-input">

              <input type='text' placeholder='Search'></input><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#60646c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              <input type='date' value='2024-02-24'></input>
            </div>
            <div className='toggle'>
              <p><svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)"> <path d="m5.5.5h6c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-6c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2zm8 2.5h1c1.1045695 0 2 .8954305 2 2v5c0 1.1045695-.8954305 2-2 2h-1z"></path> <path d="m.5 3h1c1.1045695 0 2 .8954305 2 2v5c0 1.1045695-.8954305 2-2 2h-1z" transform="matrix(-1 0 0 1 4 0)"></path> </g> </g></svg>Card</p>
              <p><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>List</p>
            </div>
          </div>
          <div className='tasks'>
            <div className='task-head'>
              <div className='head'>
                <h1>Last Tasks</h1>
                <p><b>117 total, </b> proceed to resolve them</p>
              </div>
              <div className='flex'>
                <div className='head'>
                  <h1>94</h1>
                  <p>Done</p>
                </div>
                <div className='head'>
                  <h1>23</h1>
                  <p>In progress</p>
                </div>
              </div>
            </div>
            <div className='table'>
              {tasks ? (
                <>
                  <div className='task-name'>
                    <p><input type='checkbox'></input><label>Name</label></p>
                    {Object.values(tasks).map((task) => (
                      <p><input type='checkbox'></input><label>{task.task}</label></p>
                    ))}
                  </div>
                  <div className='admin'>
                    <p>Admin</p>
                    {Object.values(tasks).map((task) => (
                      <p><img src={profile.profile_pic}></img>{task.assigned_by}</p>
                    ))}
                  </div>
                  <div className='estimated-days'>
                    <p>Est. Days</p>
                    {Object.values(tasks).map((task) => (
                      <p>{task.estimated_days}</p>
                    ))}
                  </div>
                  <div className='status'>
                    <p>Status</p>
                    {Object.values(tasks).map((task) => (
                      <p>{task.current_status}</p>
                    ))}
                  </div>
                  <div className='assignee-role'>
                    <p>Assignee Role</p>
                    {Object.values(tasks).map((task) => (
                      <p>{task.assignee_role}</p>
                    ))}
                  </div>
                  <div className='finish-date'>
                    <p>Finish Date</p>
                    {Object.values(tasks).map((task) => (
                      <p>{task.due_date}</p>
                    ))}
                  </div>
                </>
              ) : (
                <p>Loading</p>
              )}
            </div>

          </div>
          <div className='footer'>
            <div className='productivity'>
              <div className='productivity-head'>
                <h1>Productivity</h1>
                <input type='date' value='2024-02-24'></input>
              </div>
              <img src='https://goodly.co.in/wp-content/uploads/2014/10/Total-of-Line-Chart2.gif'></img>
            </div>
            <div className='projects'>
              <h1>Projects in progress:</h1>
              <div className='card'>
                <div className='card-head'>
                  <p>Feedback</p>
                  <p>Bug</p>
                  <p>Design System</p>
                </div>
                <h2>Improve card readability</h2>
                <h4>22-10-22</h4>
                <div className='card-footer'>
                  <div className='images'>
                    <img src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png'></img>
                    <img src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png'></img>
                    <img src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png'></img>
                  </div>
                  <p> <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.0001 8.517C8.58589 8.517 8.2501 8.85279 8.2501 9.267C8.2501 9.68121 8.58589 10.017 9.0001 10.017V8.517ZM16.0001 10.017C16.4143 10.017 16.7501 9.68121 16.7501 9.267C16.7501 8.85279 16.4143 8.517 16.0001 8.517V10.017ZM9.8751 11.076C9.46089 11.076 9.1251 11.4118 9.1251 11.826C9.1251 12.2402 9.46089 12.576 9.8751 12.576V11.076ZM15.1251 12.576C15.5393 12.576 15.8751 12.2402 15.8751 11.826C15.8751 11.4118 15.5393 11.076 15.1251 11.076V12.576ZM9.1631 5V4.24998L9.15763 4.25002L9.1631 5ZM15.8381 5L15.8438 4.25H15.8381V5ZM19.5001 8.717L18.7501 8.71149V8.717H19.5001ZM19.5001 13.23H18.7501L18.7501 13.2355L19.5001 13.23ZM18.4384 15.8472L17.9042 15.3207L17.9042 15.3207L18.4384 15.8472ZM15.8371 16.947V17.697L15.8426 17.697L15.8371 16.947ZM9.1631 16.947V16.197C9.03469 16.197 8.90843 16.23 8.79641 16.2928L9.1631 16.947ZM5.5001 19H4.7501C4.7501 19.2662 4.89125 19.5125 5.12097 19.6471C5.35068 19.7817 5.63454 19.7844 5.86679 19.6542L5.5001 19ZM5.5001 8.717H6.25012L6.25008 8.71149L5.5001 8.717ZM6.56175 6.09984L6.02756 5.5734H6.02756L6.56175 6.09984ZM9.0001 10.017H16.0001V8.517H9.0001V10.017ZM9.8751 12.576H15.1251V11.076H9.8751V12.576ZM9.1631 5.75H15.8381V4.25H9.1631V5.75ZM15.8324 5.74998C17.4559 5.76225 18.762 7.08806 18.7501 8.71149L20.2501 8.72251C20.2681 6.2708 18.2955 4.26856 15.8438 4.25002L15.8324 5.74998ZM18.7501 8.717V13.23H20.2501V8.717H18.7501ZM18.7501 13.2355C18.7558 14.0153 18.4516 14.7653 17.9042 15.3207L18.9726 16.3736C19.7992 15.5348 20.2587 14.4021 20.2501 13.2245L18.7501 13.2355ZM17.9042 15.3207C17.3569 15.8761 16.6114 16.1913 15.8316 16.197L15.8426 17.697C17.0201 17.6884 18.1461 17.2124 18.9726 16.3736L17.9042 15.3207ZM15.8371 16.197H9.1631V17.697H15.8371V16.197ZM8.79641 16.2928L5.13341 18.3458L5.86679 19.6542L9.52979 17.6012L8.79641 16.2928ZM6.2501 19V8.717H4.7501V19H6.2501ZM6.25008 8.71149C6.24435 7.93175 6.54862 7.18167 7.09595 6.62627L6.02756 5.5734C5.20098 6.41216 4.74147 7.54494 4.75012 8.72251L6.25008 8.71149ZM7.09595 6.62627C7.64328 6.07088 8.38882 5.75566 9.16857 5.74998L9.15763 4.25002C7.98006 4.2586 6.85413 4.73464 6.02756 5.5734L7.09595 6.62627Z" fill="#a09a9a"></path> </g></svg>12 comments</p>
                  <p><svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#a09a9a" d="m96 38-4.243-4.243A6 6 0 0 1 96 32v6ZM30 148h132v12H30v-12Zm134-2V46h12v100h-12Zm-2-102H96V32h66v12Zm-61.757-1.757-16 16-8.486-8.486 16-16 8.486 8.486ZM80 60H30V48h50v12Zm-52 2v50H16V62h12Zm0 50v34H16v-34h12Zm56.243-53.757-58 58-8.486-8.486 58-58 8.486 8.486ZM22 106h66v12H22v-12Zm68-2V38h12v66H90Zm-2 2a2 2 0 0 0 2-2h12c0 7.732-6.268 14-14 14v-12Zm74 42a2 2 0 0 0 2-2h12c0 7.732-6.268 14-14 14v-12ZM30 160c-7.732 0-14-6.268-14-14h12a2 2 0 0 0 2 2v12Zm0-100a2 2 0 0 0-2 2H16c0-7.732 6.268-14 14-14v12Zm134-14a2 2 0 0 0-2-2V32c7.732 0 14 6.268 14 14h-12Z"></path></g></svg>0 files</p>
                </div>
              </div>
              <div className='box-2'></div>
              <div className='box-3'></div>
              <div className='box-4'></div>
              <div className='nav'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg></div>
            </div>
          </div>

        </div>
        <div className={activeButton === 2 ? 'pop-up' : 'deactive'}>
          <ol>

            {Object.values(notifications).map((notification, index) => (
              <li key={index}>{notification.message}</li>
            ))}
          </ol>

          <div className='cross' onClick={() => handleClick(1)} >x</div>
        </div>
      </div>
    </>
  )
}

export default App