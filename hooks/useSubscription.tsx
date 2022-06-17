import { onCurrentUserSubscriptionUpdate, Subscription } from "@stripe/firestore-stripe-payments";
import { User } from "firebase/auth";
import { useEffect, useState } from 'react';
import { on } from "stream";
import payments from "../lib/stripe";

function useSubscription(user: User | null | undefined) {
    const [subscription, setSubscription] = useState<Subscription | null>();

    useEffect(() => {
        if(!user) return;
        onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
            setSubscription(snapshot.subscriptions.filter((subscription) => subscription.status === "active" || subscription.status === "trialing")[0]);
        });
    }, [user]);

    return subscription;
}

export default useSubscription;