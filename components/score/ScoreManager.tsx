// scoreManager.js
import { db } from "@/utils/Firebase";
import {
  addDoc,
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { Score } from "@/types/types";

export interface ScoreWithId {
  id: string;
  name: string;
  score: number;
  timestamp?: string;
}

export async function addScore({ name, score }: Score) {
  try {
    const scoresCollection = collection(db, "scores");

    const newScore: Score = {
      name: name,
      score,
      timestamp: new Date().toISOString(),
    };
    await addDoc(scoresCollection, newScore);
  } catch (error) {
    console.error("Error adding score:", error);
  }
}

export function subscribeToTopScores(
  setTopScores: React.Dispatch<React.SetStateAction<ScoreWithId[]>>
) {
  const scoresCollection = collection(db, "scores");
  const topScoresQuery = query(
    scoresCollection,
    orderBy("score", "desc"),
    limit(10)
  );

  const unsubscribe = onSnapshot(topScoresQuery, (snapshot) => {
    const scores: ScoreWithId[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      score: doc.data().score,
    }));

    setTopScores(scores);
  });

  return unsubscribe;
}
