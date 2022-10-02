import { useState } from "react";
import axios from "axios";
import QuoteDisplay from "./QuoteDisplay";
import { IQuote } from "./interfaces";


/** Component to get and set an inspirational quote,
 * shown by a child component (QuoteDisplay).
 *
 * Props:
 * - None
 *
 * State:
 * - [quote, setQuote]: the current quote
 *
 * App -> QuoteApp -> QuoteDisplay
 */

function QuoteApp() {
  const [quote, setQuote] = useState<IQuote | null>(null);

  /** retrieve a random quote from quotes API */
  async function getQuote(): Promise<void> {
    const response = await axios.get("https://inspo-quotes-api.herokuapp.com/quotes/random");
    const randomQuote = response.data.quote;
    setQuote(randomQuote);
  }

  return (
    <QuoteDisplay getQuote={getQuote} quote={quote} />
  );
}

export default QuoteApp;