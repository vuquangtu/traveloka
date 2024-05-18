import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  addDoc,
  collection,
  deleteDoc,
  getDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../firebase/config";

const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["rooms"],
  endpoints: (builder) => ({
    fetchrooms: builder.query({
      queryFn: async () => {
        try {
          const roomsRef = collection(db, "rooms");
          const querySnapshot = await getDocs(roomsRef);
          const listrooms = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: listrooms };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["rooms"],
    }),
    fetchroom: builder.query({
      queryFn: async (id) => {
        try {
          const roomRef = doc(db, "rooms", id);
          const snapshot = await getDoc(roomRef);
          return { data: snapshot.data() };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["rooms"],
    }),

    addroom: builder.mutation({
      queryFn: async (room) => {
        try {
          await addDoc(collection(db, "rooms"), {
            ...room,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["rooms"],
    }),
    updateroom: builder.mutation({
      queryFn: async ({ id, room }) => {
        try {
          await updateDoc(doc(db, "rooms", id), {
            ...room,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["rooms"],
    }),
    deleteroom: builder.mutation({
      queryFn: async (id) => {
        try {
          await deleteDoc(doc(db, "rooms", id));
          return { status: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["rooms"],
    }),
  }),
});

export const {
  useFetchroomQuery,
  useFetchroomsQuery,
  useAddroomMutation,
  useDeleteroomMutation,
  useUpdateroomMutation,
} = roomsApi;
export default roomsApi;
