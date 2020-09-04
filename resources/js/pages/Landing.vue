<template>
  <div class="w-full">
    <div class="bg-gray-100">
      <div
        class="lg:h-auto bg-cover h-64 w-full bg-no-repeat"
        :class="getBanner"
        style="width: auto; height: auto;"
        aria-hidden="true"
        role="tabpanel"
        aria-describedby
      >
        <nav
          class="flex items-center justify-between flex-wrap bg-transparent py-4 lg:pl-20 pl-4 pr-4"
        >
          <div class="flex lg:mb-40 lg:pb-5 items-center flex-shrink-0 text-white ml-5">
            <a href="#">
              <span
                class="font-semibold text-2xl tracking-tight text-primary hover:text-purple-600"
              >Eruditee</span>
            </a>
          </div>
          <div class="block lg:hidden">
            <a
              @click="shrink = !shrink"
              class="shadow-lg cursor-pointer flex items-center px-4 py-4 w-12 h-12 border rounded-full text-primary border-primary bg-white hover:text-purple-600 hover:border-purple-600"
            >
              <svg
                v-if="!shrink"
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                v-else
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <title>Menu</title>
                <path
                  d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
                />
              </svg>
            </a>
          </div>

          <div class="w-full h-64 lg:w-3/5 block lg:flex lg:mr-32 ml-4 items-center">
            <transition name="shrinker">
              <div
                class="lg:flex text-sm bg-gray-200 lg:bg-transparent lg:self-start py-1 rounded-lg"
                v-if="shrink"
              >
                <a
                  href="#"
                  class="block mt-4 lg:inline-block text-lg text-primary hover:text-purple-600 mr-4 ml-5"
                >Features</a>
                <a
                  href="#"
                  class="block mt-4 lg:inline-block text-lg text-primary hover:text-purple-600 mr-4 ml-5"
                >About</a>
                <a
                  href="#"
                  class="block mt-4 lg:inline-block text-lg text-primary hover:text-purple-600 mr-4 ml-5"
                >Pricing</a>
                <a
                  href="#"
                  class="block mt-4 lg:inline-block text-lg text-primary hover:text-purple-600 ml-5"
                >Contact</a>

                <div class="flex flex-col lg:flex-row lg:ml-56 lg:mb-0 lg:items-end ml-2 mb-20">
                  <a
                    href="#"
                    class="inline-block lg:hover:h-10 h-8 lg:h-12 lg:mx-2 hover:mb-2 text-lg px-4 py-2 leading-none border rounded hover:rounded lg:text-white border-transparent text-primary lg:hover:border-white lg:bg-primary mt-4 lg:mt-0"
                  >Login</a>
                  <a
                    href="#"
                    class="inline-block lg:hover:h-10 h-8 lg:h-12 hover:mb-2 text-lg px-4 py-2 leading-none border rounded hover:rounded lg:text-white text-primary border-transparent lg:hover:border-white lg:bg-primary mt-4 lg:mt-0"
                  >Register</a>
                </div>
              </div>
            </transition>
          </div>
        </nav>
        <div class="lg:pl-24 pl-8 mt-16 lg:mt-16">
          <h5 class="text-white text-2xl font-semibold font-serif">Eruditee</h5>
          <h1
            class="text-white text-4xl font-extrabold font-serif"
          >{{presentations[currentlyPresenting]}}</h1>
        </div>
        <div class="mb-8">
          <div class="float-left ml-8 rounded-full bg-gray-500 hidden lg:block" id="previous">
            <a href="#" class="text-white" @click.prevent="previousBanner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="fill-current w-8 h-8"
              >
                <path
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.222 18.917c5.666-5.905-.629-10.828-5.011-7.706l1.789 1.789h-6v-6l1.832 1.832c7.846-6.07 16.212 4.479 7.39 10.085z"
                />
              </svg>
            </a>
          </div>
          <div class="float-right mr-8 rounded-full bg-gray-500 hidden lg:block" id="next">
            <a href="#" class="text-white" @click.prevent="nextBanner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12c0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10 10 4.486 10 10zm-22 0c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm16.168-3.168l1.832-1.832v6h-6l1.789-1.789c-4.382-3.121-10.677 1.802-5.011 7.706-8.822-5.606-.456-16.155 7.39-10.085z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="flex lg:flex-row flex-col justify-end items-center pb-10 lg:justify-end">
          <div class="flex lg:hidden mr-4 my-4">
            <div v-for="(c,id) in presentations" :key="id + 'c'" class="mx-2 text-gray-400">
              <svg
                :class="id == currentlyPresenting ? 'text-blue-700' : 'text-white' "
                xmlns="http://www.w3.org/2000/svg"
                class="w-2 h-2 fill-current"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="12" />
              </svg>
            </div>
          </div>

          <div class="text-right lg:mr-40 text-white mb-2">
            <p class="text-6xl font-semibold inline-block">{{`${(currentlyPresenting + 1)}`}}</p>
            <p class="inline-block text-lg font-serif font-light">&nbsp; /4</p>
          </div>
        </div>

        <div class="lg:h-32 h-16"></div>
      </div>

      <div class="lg:flex border border-gray-400 flex-col lg:flex-row h-48">
        <div
          class="flex-grow lg:px-24 px-4 py-4 rounded-lg"
          :class="getDetailClass"
          v-html="details[currentlyPresenting]"
        ></div>
        <div
          class="flex-grow-0 px-24 py-8 rounded-lg hidden lg:flex"
          :class="getDetailRightClass"
          v-html="detailsRight[currentlyPresenting]"
        ></div>
      </div>

      <div class="mt-20 flex flex-col lg:flex-wrap items-center justify-center lg:content-center">
        <h4
          class="antialiased text-lg font-semibold text-gray-500 tracking-wide font-serif mb-4"
        >A complete solution</h4>
        <h1
          class="lg:text-2xl font-semibold antialiased lg:tracking-wide font-serif text-base"
        >We Have A Solution For Everyone</h1>
      </div>

      <!-- fix responsive(mobile): -->
      <div class="flex flex-row lg:flex-wrap lg:justify-center mt-12 items-stretch">
        <div class="flex lg:flex-row flex-col justify-center items-center w-1/4 lg:w-full">
          <div class="flex lg:flex-row flex-col items-center justify-center">
            <div
              class="border rounded-full h-12 w-12 bg-blue-200 flex justify-center content-center items-center"
            >
              <p class="text-lg font-semibold text-blue-700">1</p>
            </div>
            <span class="hidden lg:inline">&nbsp;</span>
            <hr class="lg:w-72 lg:h-1 h-32 w-1 bg-gray-400" />
            <span class="hidden lg:inline">&nbsp;</span>
          </div>

          <div class="flex lg:flex-row flex-col items-center justify-center">
            <div
              class="border rounded-full h-12 w-12 bg-blue-200 flex justify-center content-center items-center"
            >
              <p class="text-lg font-semibold text-blue-700">2</p>
            </div>
            <span class="hidden lg:inline">&nbsp;</span>
            <hr class="lg:w-72 lg:h-1 h-32 w-1 bg-gray-400" />
            <span class="hidden lg:inline">&nbsp;</span>
          </div>

          <div class="flex lg:flex-row flex-col items-center justify-center">
            <div
              class="border rounded-full h-12 w-12 bg-blue-200 flex justify-center content-center items-center"
            >
              <p class="text-lg font-semibold text-blue-700">3</p>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col w-3/4 lg:flex-row lg:items-center lg:justify-center justify-between items-stretch lg:w-full lg:mt-4"
        >
          <div class="flex lg:justify-center lg:items-center flex-col lg:pl-40 lg:pb-0 pb-8">
            <h2 class="text-base lg:text-lg font-serif lg:font-bold font-medium pb-1">Admin</h2>
            <p
              class="text-base lg:text-lg text-gray-500 font-serif lg:px-5"
            >A complete solution for complete control of every aspect of school management.</p>
          </div>

          <div class="flex lg:justify-center lg:items-center flex-col lg:pb-0 pb-8 lg:pt-0 pt-2">
            <h2 class="text-base lg:text-lg font-serif lg:font-bold font-medium pb-1">Teacher</h2>
            <p
              class="text-base lg:text-lg text-gray-500 font-serif lg:px-5"
            >A complete suite for managing the entire teaching and result computation process.</p>
          </div>

          <div class="flex lg:justify-center lg:items-center flex-col lg:pr-40 lg:pt-0 pt-2">
            <h2 class="text-base lg:text-lg font-serif lg:font-bold font-medium pb-1">Student</h2>
            <p
              class="text-base lg:text-lg text-gray-500 font-serif lg:px-5"
            >A student dashboard to enable seemless learning and performace tracking.</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row lg:mx-32 mx-1 mt-16">
        <div
          class="flex flex-col lg:w-2/4 w-full h-auto bg-display bg-cover p-16 border rounded-lg mx-2 my-2"
        >
          <a href="#">
            <h4
              class="text-2xl font-serif text-white font-semibold mb-3"
            >Beat Covid: Go Back To Scchool With Virtual Class</h4>
            <p
              class="text-lg text-white my-3 font-serif"
            >Don't Let COVID-19 Stop Your Children from making progress</p>
            <p class="text-sm text-white font-semibold my-3 font-serif">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 fill-current w-2 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </p>
          </a>
        </div>

        <div
          class="flex flex-col lg:w-1/4 w-full h-auto bg-display bg-cover p-16 border rounded-lg mx-2 my-2"
        >
          <a href="#">
            <p
              class="text-lg text-white my-3 font-serif"
            >Cutting edge features for better school management</p>
            <p class="text-sm text-white font-semibold my-3 font-serif">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 fill-current w-2 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </p>
          </a>
        </div>

        <div
          class="flex flex-col lg:w-1/4 w-full h-auto bg-display bg-cover p-16 border rounded-lg mx-2 my-2"
        >
          <a href="#">
            <p
              class="text-lg text-white my-3 font-serif"
            >24 x 7 Support For Admins, Teachers, And Students Alike.</p>
            <p class="text-sm text-white font-semibold my-3 font-serif">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 fill-current w-2 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </p>
          </a>
        </div>
      </div>
      <div class="flex lg:justify-center lg:w-full lg:items-center">
        <div class="flex justify-center lg:w-full h-auto">
          <!-- carousel -->
          <div class="lg:w-10/12">
            <div
              class="flex flex-col lg:justify-center items-center mt-16 border rounded-md bg-blue-900 bg-noisy lg:p-5 w-full lg:w-full lg:mx-0 lg:h-full"
            >
              <div
                class="flex flex-col lg:px-64 mb-2 justify-center items-center content-center flex-wrap"
              >
                <p
                  class="text-gray-500 text-base font-serif font-medium tracking-wide"
                >Success stories</p>
                <p
                  class="text-white text-lg lg:text-2xl font-serif font-medium lg:font-bold tracking-wide text-center"
                >See how Academium is helping schools around the world</p>
              </div>

              <!-- start stories -->
              <carousel
                :navigate-to="currentSlide"
                :loop="true"
                :navigation-click-active-color="'text-blue-500'"
                :pagination-padding="3"
                :space-padding-max-offset-factor="-70"
                :space-padding="30"
                :resistance-coef="5"
                :navigation-enabled="false"
                :per-page-custom="[[320, 1], [1024, 3]]"
                :scroll-per-page="false"
                class="flex lg:w-full justify-stretch items-stretch lg:flex-row w-64 bg-transparent"
              >
                <slide
                  v-for="(story, id) in stories"
                  :key="id + ' story'"
                  :data-index="id"
                  :data-name="'slide ' + id"
                  @slideclick="handleSlideClick"
                  class="flex flex-col h-auto lg:h-90 bg-white border rounded-lg mb-2 ml-0 mr-10 lg:mr-6"
                >
                  <img class="h-2/6" src="/assets/images/img7.jpg" alt="airbnb" />

                  <div class="text-gray-900 h-4/6 bg-white py-6 px-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 inline-block fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
                      />
                    </svg>
                    <span class="text-xl font-mono font-bold">Github</span>
                    <p class="mt-2 font-serif text-base">{{story}}</p>
                    <a href="#" class="text-blue-400 text-base font-mono font-semibold">
                      Read Story
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 fill-current w-2 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                      </svg>
                    </a>
                  </div>
                </slide>
              </carousel>
              <!--nav -->
              <div class="relative mt-24">
                <!-- navigation prev -->
                <div class="absolute z-20 top-50 left-0 transform -translate-y-16 translate-x-2">
                  <div class="bg-blue-800 rounded-full flex justify-center items-center h-10 w-10">
                    <a href="#" @click.prevent="navigateBackward()">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="text-white fill-current w-8 h-8"
                      >
                        <path
                          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.222 18.917c5.666-5.905-.629-10.828-5.011-7.706l1.789 1.789h-6v-6l1.832 1.832c7.846-6.07 16.212 4.479 7.39 10.085z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <!--navigation end -->

                <!--navigation-next -->
                <div
                  class="absolute z-20 top-50 right-n1 transform -translate-y-16 lg:-translate-x-4 -translate-x-2"
                >
                  <div class="bg-blue-800 rounded-full flex justify-center items-center h-10 w-10">
                    <a href="#" @click.prevent="navigateForward()">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-white fill-current w-8 h-8"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 12c0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10 10 4.486 10 10zm-22 0c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm16.168-3.168l1.832-1.832v6h-6l1.789-1.789c-4.382-3.121-10.677 1.802-5.011 7.706-8.822-5.606-.456-16.155 7.39-10.085z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <!-- navigation end -->
              </div>

              <!-- end stories -->
            </div>
          </div>
          <!-- carousel end -->
        </div>
      </div>

      <div class="flex flex-col justify-center items-center mt-24 pt-6">
        <div class="flex flex-col text-center mb-16">
          <p class="text-gray-600 font-serif text-base mb-2">Why Eruditee?</p>

          <p class="font-serif text-3xl">Why choose Eruditee for your school?</p>
        </div>

        <div class="flex lg:flex-row flex-col lg:w-7/12">
          <div
            class="flex flex-col lg:w-2/5 w-full justify-start align-start content-start pl-4 lg:pl-0"
          >
            <div class="flex flex-row flex-wrap my-2">
              <div
                class="border rounded-full h-6 w-6 bg-blue-200 flex justify-center content-center items-center text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              </div>

              <p class="pl-2 font-serif text-base text-gray-500">Complete learning platform</p>
            </div>

            <div class="flex flex-row flex-wrap my-2">
              <div
                class="border rounded-full h-6 w-6 bg-blue-200 flex justify-center content-center items-center text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              </div>
              <p class="pl-2 font-serif text-base text-gray-500">School management system</p>
            </div>

            <div class="flex flex-row flex-wrap my-2">
              <div
                class="border rounded-full h-6 w-6 bg-blue-200 flex justify-center content-center items-center text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              </div>
              <p class="pl-2 font-serif text-base text-gray-500">Powerful features</p>
            </div>

            <div class="flex flex-row flex-wrap my-2">
              <div
                class="border rounded-full h-6 w-6 bg-blue-200 flex justify-center content-center items-center text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              </div>
              <p class="pl-2 font-serif text-base text-gray-500">Mobile platform</p>
            </div>

            <div class="flex flex-row flex-wrap my-2">
              <div
                class="border rounded-full h-6 w-6 bg-blue-200 flex justify-center content-center items-center text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              </div>
              <p class="pl-2 font-serif text-base text-gray-500">24x7 Support</p>
            </div>

            <div class="flex flex-row flex-wrap my-2">
              <div
                class="border rounded-full h-6 w-6 bg-blue-200 flex justify-center content-center items-center text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              </div>
              <a href="#">
                <p class="pl-2 font-serif text-base text-blue-700">
                  See More ...
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-2 fill-current w-2 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                  </svg>
                </p>
              </a>
            </div>
          </div>

          <div class="flex flex-row lg:w-3/5">
            <div
              class="flex flex-col flex-wrap w-11/12 bg-white shadow-lg hover:shadow-2xl ml-2 mr-n45 lg:mr-n56 lg:h-auto mt-3 p-5 rounded-lg"
              style="z-index:1;"
            >
              <img
                src="/assets/images/illustrations/teaching.png"
                class="h-20 w-56 mb-2 self-start"
                alt="flex-image"
              />
              <h3
                class="text-lg font-semibold font-serif mb-4 tracking-wide leading-relaxed lg:pt-1 lg:px-4 text-center"
              >We tackle the challenges schools face</h3>
              <p class="text-sm font-serif text-gray-600 p-2">
                Besides working with schools as a partner for digitalization,
                we have built features for common pain points that schools
                encounter in various school management and online learning processes.
              </p>
            </div>
            <img
              src="https://streamlabs.nyc3.cdn.digitaloceanspaces.com/assets/svg/components/dots-2.svg"
              class="h-64 w-40 mr-16 relative lg:h-56 lg:mt-8 lg:left-7 lg:top-4 left-4 top-8"
              style="z-index:0;"
              alt="svg dots"
            />
          </div>
        </div>

        <div class="flex lg:flex-row flex-col lg:w-8/12 mt-16 lg:justify-between">
          <div
            class="flex flex-row justify-start items-start mb-4 bg-white shadow-xl hover:shadow-2xl lg:h-48 mx-3 p-5 rounded-lg"
          >
            <img
              src="/assets/images/illustrations/ask.png"
              class="h-20 w-24 mb-2 self-start"
              alt="flex-image"
            />
            <div class="flex flex-col flex-wrap pt-4">
              <h3
                class="text-lg font-semibold font-serif mb-4 tracking-wide leading-relaxed lg:p-1"
              >Ask a question</h3>
              <p
                class="text-sm font-serif text-gray-600 lg:pr-24"
              >Want to find out more? Send us a message and we will put you through.</p>
              <a href="#" class="text-blue-400 font-serif font-semibold text-right">Contact us</a>
            </div>
          </div>

          <div
            class="flex flex-row justify-start items-start bg-white shadow-xl hover:shadow-2xl lg:h-48 mx-3 p-5 rounded-lg"
          >
            <img
              src="/assets/images/illustrations/rocket.png"
              class="h-20 w-24 mb-2 self-start"
              alt="register-image"
            />
            <div class="flex flex-col flex-wrap pt-4">
              <h3
                class="text-lg font-semibold font-serif mb-4 tracking-wide leading-relaxed lg:p-1"
              >Join the flight</h3>
              <p
                class="text-sm font-serif text-gray-600 lg:pr-24"
              >Come on board and take your school to a whole new level.</p>
              <a href="#" class="text-blue-400 font-serif font-semibold text-right">Register</a>
            </div>
          </div>
        </div>
      </div>

      <footer class="mt-16 font-serif">
        <div class="bg-blue-900 lg:px-32 px-6 lg:py-16 py-6 justify-stretch items-stretch">
          <div class="flex lg:flex-row flex-col">
            <div class="flex flex-col justify-start items-start mb-10 lg:w-1/4">
              <h4 class="text-blue-400 text-lg font-semibold pb-4 font-serif">Eruditee</h4>
              <p class="text-gray-300 pb-2 font-serif">153 Williamson Plaza, Maggieberg</p>
              <p class="text-gray-400 text-sm font-thin pb-2 select-all">+234 806 482 0288</p>
              <p class="text-gray-400 text-sm font-thin pb-2 select-all">+234 816 338 6049</p>
            </div>

            <div class="flex flex-row justify-between items-stretch lg:pl-56 lg:w-3/4">
              <div class="flex flex-col justify-start items-start mb-10">
                <h4
                  class="text-white text-base lg:text-lg lg:font-semibold font-medium pb-4"
                >Company</h4>
                <a href="/about">
                  <p class="text-gray-500 text-sm lg:text-base font-thin pb-2">About</p>
                </a>
                <a href="/contact">
                  <p class="text-gray-500 text-sm lg:text-base font-thin pb-2">Contact</p>
                </a>
              </div>

              <div class="flex flex-col justify-start items-start mb-10">
                <h4
                  class="text-white text-base lg:text-lg lg:font-semibold font-medium pb-4"
                >Products</h4>
                <a href="/features">
                  <p class="text-gray-500 text-sm lg:text-base font-thin pb-2">Features</p>
                </a>
                <a href="/pricing">
                  <p class="text-gray-500 text-sm lg:text-base font-thin pb-2">Pricing</p>
                </a>
              </div>

              <div class="flex flex-col justify-start items-start mb-10">
                <h4 class="text-white text-base lg:text-lg lg:font-semibold font-medium pb-4">Policy</h4>
                <a href="/terms-policy">
                  <p class="text-gray-500 text-sm lg:text-base font-thin pb-2">Terms Of Service</p>
                </a>
                <a href="/privacy-policy">
                  <p class="text-gray-500 text-sm lg:text-base font-thin pb-2">Privacy Policy</p>
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <hr />
            <div class="flex lg:justify-end flex-row lg:items-start text-white mt-10 lg:mt-6">
              <a href="#" class="mx-2">
                <span class="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current text-white h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                    />
                  </svg>
                </span>
              </a>

              <a href="#" class="mx-2">
                <span class="text-current bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current text-white h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>

              <a href="#" class="mx-2">
                <span class="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 fill-current text-white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
                    />
                  </svg>
                </span>
              </a>

              <a href="#" class="mx-2">
                <span class="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 fill-current stroke-current text-white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div class="flex lg:justify-center lg:items-center justify-start items-start mt-6">
              <p
                class="text-sm text-gray-300 font-serif font-thin"
              >{{`© Academium ${getDate()} All rights reserved.`}}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentSlide: 0,
      currentlyFlexing: [0, 3],
      shrink: true,
      stories: [
        `Eruditee's source is well managed by excellent developpers on fantastic source control platforms jj developpers on fantastic source control platforms`,
        `Laravel Money is a composer package by Ricardo Gobbo Souza for free me please do oh salt uh h developpers on fantastic source control platforms`,
        `Laravel money uses the moneyphp/money PHP package under the hood take it out of the castle and r hg developpers on fantastic source control platforms `,
        `This package includes a ton of advanced features for doing money free huold tresdg hgtrh jnsdjk jjs developpers on fantastic source control platforms`,
        `operations, comparisons, aggregations, formatting, and parsing: gtreyuun jjsd ngtr jdkj kdkd hyrt h developpers on fantastic source control platforms `,
        `Be sure to check out the advanced usage and included helper functions greetings dear men of salute gdeveloppers on fantastic source control platforms`,
        `documentation for complete details of what this package is capable of doing oh dear me can you underdeveloppers on fantastic source control platforms.`,
        `You can learn more about this package and check out the source code on GitHub at cknow/laravel-moneydeveloppers on fantastic source control platforms`,
        `You can learn more about this package and check out the source code on GitHub at cknow/laravelmoneydeveloppers on fantastic source control platforms`,
      ],
      details: [
        `<h1 class="text-2xl font-serif font-thin text-gray-500"> 01 </h1> <h1 class="lg:text-4xl text-lg text-green-400 font-serif"> Virtual Classroom </h1> <p class=" lg:text-lg text-base font-serif leading-snug text-gray-500"> Academium enables your teachers continue teaching your students in an interactive virtual classroom. </p>`,
        `<h1 class="text-2xl font-serif font-thin text-gray-500"> 02 </h1> <h1 class="lg:text-4xl text-lg text-blue-600 font-serif"> Learning Management </h1> <p class=" lg:text-lg text-base font-serif leading-snug text-gray-500">Academium is a complete learning management platform providing every tool you need for school management and learning. </p>`,
        `<h1 class="text-2xl font-serif font-thin text-gray-500"> 03 </h1> <h1 class="lg:text-4xl text-lg text-red-600 font-serif"> A Place For Everyone </h1> <p class=" lg:text-lg text-base font-serif leading-snug text-gray-500">Academium provides tools for school admins, teachers and students making school management and learning easy. </p>`,
        `<h1 class="text-2xl font-mono font-thin text-gray-500"> 04 </h1> <h1 class="lg:text-4xl text-lg text-gray-400 font-serif"> 24x7 Support</h1> <p class=" lg:text-lg text-base font-serif leading-snug text-gray-500">When you are on our beat, we got your back 247; admins, teachers, students, everyone!. </p>`,
      ],
      detailsRight: [
        `<h4 class="text-4xl font-serif leading-tight text-white">Next: Learning Management</h4>`,
        `<h4 class="text-4xl font-serif leading-tight text-white">Next: A Place For Everyone</h4>`,
        `<h4 class="text-4xl font-serif leading-tight text-white">Next: 24 x 7 Support </h4>`,
        `<h4 class="text-4xl font-serif leading-tight text-white">Prev: Virtual Classroom</h4>`,
      ],
      presentations: [
        "Has A Virtual Classroom",
        "Is A Complete Learning Management Platform",
        "Has A Place For Everyone",
        "Provides 24 x 7 Support",
      ],
      currentlyPresenting: 0,
    };
  },
  methods: {
    shrinkNavLinks() {
      if (window.screen.width <= 1024) {
        this.shrink = false;
      }
    },
    updateCurrentlyPresenting() {
      if (this.currentlyPresenting >= 3) {
        return (this.currentlyPresenting = 0);
      }
      this.currentlyPresenting++;
    },
    nextBanner() {
      if (this.currentlyPresenting < 3) {
        return this.currentlyPresenting++;
      }
      if (this.currentlyPresenting == 3) {
        return (this.currentlyPresenting = 0);
      }
    },
    previousBanner() {
      if (this.currentlyPresenting > 0) {
        return this.currentlyPresenting--;
      }
      if (this.currentlyPresenting == 0) {
        return (this.currentlyPresenting = 3);
      }
    },
    nextSlide() {},
    previousSlide() {},
    getDate() {
      let date = new Date();
      date = date.getUTCFullYear();
      return date == 2020 || "2020" ? "2020." : `2020 - ${date}.`;
    },
    handleSlideClick(dataset) {
      console.log(dataset.index, dataset.name);
    },
    navigateForward() {
      if (this.currentSlide >= this.stories.length - 1) {
        return;
      }
      this.currentSlide += 1;
    },
    navigateBackward() {
      if (this.currentSlide <= 0) {
        return;
      }
      this.currentSlide -= 1;
    },
  },
  computed: {
    getBanner() {
      let banner = "bg-first-banner";
      switch (this.currentlyPresenting) {
        case 0:
          banner = "bg-first-banner";
          break;
        case 1:
          banner = "bg-second-banner";
          break;
        case 2:
          banner = "bg-third-banner";
          break;
        case 3:
          banner = "bg-fourth-banner";
          break;
      }
      return banner;
    },
    getDetailClass() {},
    getDetailRightClass() {
      let klass = "bg-blue-600";
      switch (this.currentlyPresenting) {
        case 0:
          klass = "bg-green-400";
          break;
        case 1:
          klass = "bg-blue-400";
          break;
        case 2:
          klass = "bg-red-400";
          break;
        case 3:
          klass = "bg-gray-400";
          break;
      }
      return klass;
    },
  },
  beforeMount() {
    this.shrinkNavLinks();
  },
  mounted() {
    setInterval(this.updateCurrentlyPresenting, 10000);

    window.addEventListener("resize", (e) => {
      console.log("hello");
      this.shrink = window.screen.width > 1024 ? true : false;
    });
    window.addEventListener("navforward", (e) => {
      console.log("navforward");
      this.shrink = window.screen.width > 1024 ? true : false;
    });
  },
};
</script>
<style>
.shrinker-enter-active {
  animation: shrinker 0.07s reverse;
}
.shrinker-leave-active {
  animation: shrinker 0.07s;
}

@keyframes shrinker {
  10% {
    height: 16rem;
  }
  20% {
    height: 14rem;
  }
  30% {
    height: 12rem;
  }
  40% {
    height: 10rem;
  }
  50% {
    height: 8rem;
  }
  60% {
    height: 6rem;
  }
  80% {
    height: 4rem;
  }
  90% {
    height: 2rem;
  }
  100% {
    height: 0rem;
  }
}
</style>