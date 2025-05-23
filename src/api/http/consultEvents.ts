import axios from "axios";

type Event = {
  id: number;
  name: string;
  description: string; 
  startDate: string;
  endDate: string;
  location: string;
  category: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export async function getEvents(): Promise<Event[]> {
  try {
    const response = await axios.get<Event[]>("/api/consultEvents");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getEventById(id: string): Promise<Event> {
  try {
    const response = await axios.get<Event>(`/api/consultEvent`, {
      params: { id }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

