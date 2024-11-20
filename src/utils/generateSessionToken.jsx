const generateSessionToken = async () => {
    try {
        const agentId = import.meta.env.VITE_AGENT_ID;
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(`https://api.bland.ai/v1/agents/${agentId}/authorize`, {
            method: "POST",
            headers: {
                "Authorization": apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch session token: ${response.statusText}`);
        }

        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error("Error generating session token:", error.message);
        return null;
    }
};

export default generateSessionToken;
